import { put, all, takeEvery } from 'redux-saga/effects';
import apiFetchCharacters from '../api/fetchCharacters';

function* fetchCharacters() {
  const res = yield apiFetchCharacters();
  // const res = yield Api.get(`http://gateway.marvel.com/v1/public/characters?ts=1597021360&apikey=98b6c9ddb20d947c8c5da3609f1e343d&hash=92da8313f9c2febc55f21af7b4edcfd2`)
  // const data = yield fetch(`http://gateway.marvel.com/v1/
  // public/characters?ts=1597021360
  // &apikey=98b6c9ddb20d947c8c5da3609f1e343d
  // &hash=92da8313f9c2febc55f21af7b4edcfd2`).then(response => response.json());
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