import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes as storiesActionTypes } from '../actions/stories';

const initialState = {
  storiesList: {
    limit: 0,
    offset: 0,
    results: []
  },
  storie: {
    results: [
      {
        characters: {
          items: []
        },
        title: '',
        description: ''
      }
    ]
  }
}

export default function stories(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: 
      return { ...state, ...action.payload }
    case storiesActionTypes.GET_STORIES:
      return { ...state, loading: true }
    case storiesActionTypes.STORIES_RECEIVED:
      return { ...state, storiesList: action.storiesList, loading: false }
    case storiesActionTypes.GET_STORIE:
      return { ...state, loading: true }
    case storiesActionTypes.STORIE_RECEIVED:
      return { ...state, storie: action.storie, loading: false }
    case storiesActionTypes.SET_PAGE_STORIES:
      return { ...state, storiePage: action.characters.offset}
    default:
      return state
  }
}