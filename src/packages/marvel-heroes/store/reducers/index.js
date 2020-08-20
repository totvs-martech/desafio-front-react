import { combineReducers } from 'redux';

import heroes from './heroes';
import stories from './stories';
import pagination from './pagination';

export default combineReducers({
  heroes,
  stories,
  pagination
});