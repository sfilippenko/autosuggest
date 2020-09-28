import { handleActions } from 'redux-actions';

export interface IAutoSuggest {
  suggestions: any;
}

const defaultState: IAutoSuggest = {
  suggestions: []
};

export default handleActions<IAutoSuggest, any>(
  {},
  defaultState,
);
