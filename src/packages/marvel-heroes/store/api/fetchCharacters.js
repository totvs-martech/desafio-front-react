import Api from 'axios';
import apiUrl from './';

const apiFetchCharacters = () => (
  Api.get(apiUrl('characters'))
);

export default apiFetchCharacters;