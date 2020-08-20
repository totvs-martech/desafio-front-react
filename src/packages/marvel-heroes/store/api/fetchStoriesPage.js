import Api from 'axios';
import apiUrl from './';

const apiFetchStoriesPage = (page, characterId) => (
  Api.get(`${apiUrl(`characters/${characterId}/stories`)}&offset=${page}`)
)

export default apiFetchStoriesPage;