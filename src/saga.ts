import { all, fork } from 'redux-saga/effects';
import autosuggestSagas from './Autosuggest/sagas';

export default function* () {
  yield all([fork(autosuggestSagas)]);
}
