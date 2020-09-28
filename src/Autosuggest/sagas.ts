import { Action } from 'redux-actions';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET } from '../utils/api';
import * as actions from './actions';

function* getSuggestions({ payload }: Action<actions.IGetSuggestions>) {
  try {
    const response = yield call(
      GET,
      payload.url,
      {},
      {
        cancelToken: payload.token,
      },
    );
    yield put(
      actions.setSuggestions({
        name: payload.name,
        suggestions: response.filter(
          (suggestion: any) =>
            payload
              .getSuggestionValue(suggestion)
              .toLowerCase()
              .indexOf(payload.value.toLowerCase()) !== -1,
        ),
      }),
    );
  } catch (e) {
    if (!axios.isCancel(e)) {
      yield put(
        actions.setSuggestions({
          name: payload.name,
          suggestions: [],
        }),
      );
    }
  }
}

export default function* () {
  yield all([takeEvery(actions.getSuggestions, getSuggestions)]);
}
