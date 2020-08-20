import Api from 'axios';
import apiUrl from '.';

const apiFetchCharacterInfo = (id) => (
  Api.get(apiUrl(`characters/${id}`))
);

export default apiFetchCharacterInfo;