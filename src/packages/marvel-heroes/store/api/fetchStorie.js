import Api from 'axios';
import apiUrl from './';

const apiFetchStorie = (storieId) => (
  Api.get(apiUrl(`stories/${storieId}`))
);

export default apiFetchStorie;