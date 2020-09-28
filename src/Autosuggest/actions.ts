import { CancelToken } from 'axios';
import { createAction } from 'redux-actions';

export interface IGetSuggestions {
  name: string;
  url: string;
  value: string;
  getSuggestionValue: (suggestions: any) => string;
  token: CancelToken;
}

export interface ISetSuggestions {
  name: string;
  suggestions: any;
}
export const getSuggestions = createAction<IGetSuggestions>('GET_SUGGESTIONS');
export const setSuggestions = createAction<ISetSuggestions>('SET_SUGGESTIONS');
export const clearSuggestions = createAction<string>('CLEAR_SUGGESTIONS');
