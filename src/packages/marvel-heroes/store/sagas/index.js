import { put, all, takeEvery } from 'redux-saga/effects';
import { actionTypes as heroesActionTypes } from '../actions/heroes';
import apiFetchCharacters from '../api/fetchCharacters';
import apiFetchCharactersPage from '../api/fetchCharactersPage';
import apiFetchStories from '../api/fetchStories';
import apiFetchCharacterInfo from '../api/fetchCharacterInfo';
import heroes from '../reducers/heroes';

function* fetchCharacters() {
  const res = yield apiFetchCharacters();
  yield put({ type: 'HEROES_RECEIVED', characters: res.data.data || [{ error: res.statusText }]});
}

function* actionCharacter() {
  yield takeEvery('GET_HEROES', fetchCharacters)
}

function* fetchStories(action) {
  const res = yield apiFetchStories(action.payload.heroeId);
  yield put({ type: 'STORIES_RECEIVED', storiesList: res.data.data.results || [{ error: res.statusText }]});
}

function* actionStorie() {
  yield takeEvery('GET_STORIES', fetchStories)
}

function* fetchCharactersPage(action) {
  // console.log(action)
  const res = yield apiFetchCharactersPage(action.payload.page);
  yield put({ type: 'HEROES_RECEIVED', characters: res.data.data || [{ error: res.statusText }]});
}

function* actionCharacterPage() {
  yield takeEvery('GET_PAGE_HEROES', fetchCharactersPage)
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



export default function* rootSaga() {
  yield all([
    actionCharacter(),
    actionStorie(),
    actionCharacterPage(),
    actionCharacterInfo()
  ])
};