import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';
import Autosuggest from '../Autosuggest';

type IProps = WithStyles<typeof styles>;

const getUrl1 = () => `https://api.hoqu.com/api/countries?locale=ru`;
const getUrl2 = () => `https://api.hoqu.com/api/timezones`;

const getSuggestionValue1 = (suggestion: any) => suggestion.title;
const getSuggestionValue2 = (suggestion: any) => suggestion.name;

const Layout: React.FC<IProps> = (props) => {
  const { classes } = props;
  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  return (
    <div className={classes.root}>
      <Autosuggest
        getUrl={getUrl1}
        getSuggestionValue={getSuggestionValue1}
        reducerName="input1"
        value={input1}
        onChange={setInput1}
        placeholder="Введите страну на рус"
      />
      <Autosuggest
        getUrl={getUrl2}
        getSuggestionValue={getSuggestionValue2}
        reducerName="input2"
        value={input2}
        onChange={setInput2}
        placeholder="Введите таймзону на анг"
      />
    </div>
  );
};

export default withStyles(styles)(Layout);
