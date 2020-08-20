import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  storiesList: [],
  storie: {
    results: [
      {
        characters: [],
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
    case 'GET_STORIES':
      return { ...state, loading: true }
    case 'STORIES_RECEIVED':
      return { ...state, storiesList: action.storiesList, loading: false }
    case 'GET_STORIE':
      return { ...state, loading: true }
    case 'STORIE_RECEIVED':
      return { ...state, storie: action.storie, loading: false }
    default:
      return state
  }
}