import { combineReducers } from 'redux';

import heroes from './heroes';
import stories from './stories';

export default combineReducers({
  heroes,
  stories
});