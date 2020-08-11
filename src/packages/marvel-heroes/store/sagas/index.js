import { put, all, takeEvery } from 'redux-saga/effects';
import apiFetchCharacters from '../api/fetchCharacters';
import apiFetchStories from '../api/fetchStories';

function* fetchCharacters() {
  const res = yield apiFetchCharacters();
  yield put({ type: 'HEROES_RECEIVED', heroesList: res.data.data.results || [{ error: res.statusText }]});
}

function* actionCharacter() {
  yield takeEvery('GET_HEROES', fetchCharacters)
}

function* fetchStories(action) {
  const res = yield apiFetchStories(action.payload.heroeId);
  console.log(res)
  yield put({ type: 'STORIES_RECEIVED', storiesList: res.data.data.results || [{ error: res.statusText }]});
}

function* actionStorie(heroeId) {
  yield takeEvery('GET_STORIES', fetchStories)
}

export default function* rootSaga() {
  yield all([
    actionCharacter(),
    actionStorie()
  ])
};