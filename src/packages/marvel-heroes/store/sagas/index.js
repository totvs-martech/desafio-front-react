import { put, all, takeEvery } from 'redux-saga/effects';
import apiFetchCharacters from '../api/fetchCharacters';

function* fetchCharacters() {
  const res = yield apiFetchCharacters();
  yield put({ type: 'HEROES_RECEIVED', heroesList: res.data.data.results || [{ error: res.statusText }]});
}

function* actionCharacter() {
  yield takeEvery('GET_HEROES', fetchCharacters)
}

export default function* rootSaga() {
  yield all([
    actionCharacter()
  ])
};