import { Action, handleActions } from 'redux-actions';
import * as actions from './actions';

interface IAutoSuggest {
  suggestions: any;
  loading: boolean;
}

export type IAutoSuggestState = Record<string, IAutoSuggest>;

const defaultState: IAutoSuggestState = {};

export default handleActions<IAutoSuggestState, any>(
  {
    [actions.getSuggestions.toString()]: (
      state,
      { payload }: Action<actions.IGetSuggestions>,
    ) => {
      const suggestValue = state[payload.name] || {
        suggestions: [],
        loading: false,
      };
      return {
        ...state,
        [payload.name]: {
          ...suggestValue,
          loading: true,
        },
      };
    },
    [actions.setSuggestions.toString()]: (
      state,
      { payload }: Action<actions.ISetSuggestions>,
    ) => {
      return {
        ...state,
        [payload.name]: {
          loading: false,
          suggestions: payload.suggestions,
        },
      };
    },
    [actions.clearSuggestions.toString()]: (
      state,
      { payload }: Action<string>,
    ) => {
      return {
        ...state,
        [payload]: {
          loading: false,
          suggestions: [],
        },
      };
    },
  },
  defaultState,
);
