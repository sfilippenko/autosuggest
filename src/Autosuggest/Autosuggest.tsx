import * as React from 'react';
import { connect } from 'react-redux';
import Autosuggest, {
  ChangeEvent,
  SuggestionsFetchRequested,
} from 'react-autosuggest';
import Highlighter from 'react-highlight-words';
import debounce from '@material-ui/core/utils/debounce';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import axios, { CancelTokenSource } from 'axios';
import IAppState from '../types/state';
import { getSuggestions, clearSuggestions } from './actions';
import theme from './theme';
import styles from './styles';

const { CancelToken } = axios;

const AutosuggestCustom: React.FC<IProps> = (props) => {
  const {
    value,
    onChange,
    placeholder = 'введите значение',
    getUrl,
    reducerName,
    getSuggestions,
    clearSuggestions,
    getSuggestionValue,
    suggestions,
    classes,
    loading,
  } = props;

  const source = React.useRef<CancelTokenSource | null>(null);

  const onInputChange = React.useCallback(
    (event: React.FormEvent<any>, params: ChangeEvent) => {
      onChange(params.newValue);
    },
    [onChange],
  );

  const onSuggestionsFetchRequested: SuggestionsFetchRequested = React.useCallback(
    debounce(({ value }) => {
      if (value) {
        source.current?.cancel();
        source.current = CancelToken.source();
        getSuggestions({
          name: reducerName,
          url: getUrl(value),
          value,
          getSuggestionValue,
          token: source.current.token,
        });
      }
    }, 300),
    [getSuggestionValue, getSuggestions, getUrl, reducerName],
  );

  const onSuggestionsClearRequested = React.useCallback(() => {
    clearSuggestions(reducerName);
  }, [clearSuggestions, reducerName]);

  const renderSuggestion = React.useCallback(
    (suggestion: any) => {
      return (
        <Highlighter
          searchWords={[value]}
          textToHighlight={getSuggestionValue(suggestion)}
        />
      );
    },
    [getSuggestionValue, value],
  );

  const renderInputComponent = React.useCallback(
    (inputProps: any) => {
      return (
        <div className={classes.inputWrapper}>
          <input {...inputProps} />
          {loading && (
            <div className={classes.progress}>
              <CircularProgress size={20} />
            </div>
          )}
        </div>
      );
    },
    [classes.inputWrapper, classes.progress, loading],
  );

  const onBlur = React.useCallback(() => {
    source.current?.cancel();
  }, []);

  const inputProps = React.useMemo(
    () => ({
      placeholder,
      value,
      onChange: onInputChange,
      onBlur,
    }),
    [onBlur, onInputChange, placeholder, value],
  );

  const calculatedSuggestions = React.useMemo(() => {
    return suggestions || [];
  }, [suggestions]);

  return (
    <Autosuggest
      suggestions={calculatedSuggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderInputComponent={renderInputComponent}
      inputProps={inputProps}
      theme={theme as any}
    />
  );
};

interface IPassedProps {
  getUrl: (value: string) => string;
  value: string;
  reducerName: string;
  onChange: (value: string) => void;
  getSuggestionValue: (suggestion: any) => string;
  placeholder?: string;
}

interface IProps extends IPassedProps, WithStyles<typeof styles> {
  loading: boolean;
  suggestions?: any;
  getSuggestions: typeof getSuggestions;
  clearSuggestions: typeof clearSuggestions;
}

export default connect(
  (state: IAppState, props: IPassedProps) => ({
    suggestions: state.autosuggest[props.reducerName]?.suggestions,
    loading: state.autosuggest[props.reducerName]?.loading || false,
  }),
  { getSuggestions, clearSuggestions },
)(withStyles(styles)(AutosuggestCustom));
