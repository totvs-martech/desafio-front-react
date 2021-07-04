import { combineReducers } from 'redux'

import character from './character/reducer'
import stories from './stories/reducer'
import comics from './comics/reducer'

export default combineReducers({
  character,
  stories,
  comics
})