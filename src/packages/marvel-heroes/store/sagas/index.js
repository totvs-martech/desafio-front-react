import { put, all, takeEvery } from 'redux-saga/effects';
import { actionTypes as heroesActionTypes } from '../actions/heroes';
import { actionTypes as storiesActionTypes } from '../actions/stories';

import apiFetchCharacters from '../api/fetchCharacters';
import apiFetchCharactersPage from '../api/fetchCharactersPage';
import apiFetchStories from '../api/fetchStories';
import apiFetchCharacterInfo from '../api/fetchCharacterInfo';
import apiFetchStorie from '../api/fetchStorie';
import apiFetchStoriesPage from '../api/fetchStoriesPage';

function* fetchCharacters() {
  const res = yield apiFetchCharacters();
  yield put({ type: heroesActionTypes.HEROES_RECEIVED, characters: res.data.data || [{ error: res.statusText }]});
}

function* actionCharacter() {
  yield takeEvery(heroesActionTypes.GET_HEROES, fetchCharacters)
}

function* fetchStories(action) {
  const res = yield apiFetchStories(action.payload.heroeId);
  yield put({ type: storiesActionTypes.STORIES_RECEIVED, storiesList: res.data.data || [{ error: res.statusText }]});
}

function* actionStorie() {
  yield takeEvery(storiesActionTypes.GET_STORIES, fetchStories)
}

function* fetchCharactersPage(action) {
  const res = yield apiFetchCharactersPage(action.payload.page);
  yield put({ type: heroesActionTypes.HEROES_RECEIVED, characters: res.data.data || [{ error: res.statusText }]});
}

function* actionCharacterPage() {
  yield takeEvery(heroesActionTypes.GET_PAGE_HEROES, fetchCharactersPage)
}

function* fetchStoriesPage(action) {
  const res = yield apiFetchStoriesPage(action.payload.page, action.payload.heroeId);
  yield put({ type: storiesActionTypes.STORIES_RECEIVED, storiesList: res.data.data || [{ error: res.statusText }]});
}

function* actionStoriePage() {
  yield takeEvery(storiesActionTypes.GET_PAGE_STORIES, fetchStoriesPage)
}

function* fetchCharacterInfo(action) {
  const res = yield apiFetchCharacterInfo(action.payload.id);
  const { name, thumbnail, comics, stories, series } = res.data.data.results[0];
  yield put({ type: heroesActionTypes.HEROE_INFO_RECEIVED, 
    characterInfo: { 
      name,
      thumbnail,
      comics,
      stories,
      series
   }});
}

function* actionCharacterInfo() {
  yield takeEvery(heroesActionTypes.GET_HEROE_INFO, fetchCharacterInfo)
}

function* fetchStorie(action) {
  const res = yield apiFetchStorie(action.payload.storieId);
  yield put({ type: storiesActionTypes.STORIE_RECEIVED, storie: res.data.data || [{ error: res.statusText }]});
}

function* actionGetStorie() {
  yield takeEvery(storiesActionTypes.GET_STORIE, fetchStorie)
}



export default function* rootSaga() {
  yield all([
    actionCharacter(),
    actionStorie(),
    actionCharacterPage(),
    actionCharacterInfo(),
    actionGetStorie(),
    actionStoriePage()
  ])
};