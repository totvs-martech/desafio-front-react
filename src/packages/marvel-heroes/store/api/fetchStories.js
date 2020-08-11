import Api from 'axios';
import apiUrl from './';

const apiFetchStories = (characterId) => (
  Api.get(apiUrl(`characters/${characterId}/stories`))
);

export default apiFetchStories;