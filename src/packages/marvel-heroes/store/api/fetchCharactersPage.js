import Api from 'axios';
import apiUrl from './';

const apiFetchCharactersPage = (page) => (
  Api.get(`${apiUrl('characters')}&offset=${page}`)
);

export default apiFetchCharactersPage;