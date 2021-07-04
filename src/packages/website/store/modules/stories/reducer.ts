import { Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { IStoriesState } from './types'

const INITIAL_STATE: IStoriesState = {
  results: [],
  count: 0,
  total: 0,
  limit: 0,
  offset: 0,
}

const stories: Reducer<IStoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.stories };
    case 'STORIES_UPDATE_LIST': {
      const newState = { ...action.payload.data };
      return newState;
    }
  
    default:
      return state;
  }
}

export default stories
