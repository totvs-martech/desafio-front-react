import { actionTypes as paginationActionTypes } from '../actions/pagination';

const initialState = {
  currentPageHeroes: 0,
  currentPageStories: 0
}

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case paginationActionTypes.SET_HEROES_PAGE: 
      return { ...state, currentPageHeroes: action.payload.page }
    case paginationActionTypes.SET_STORIES_PAGE: 
      return { ...state, currentPageStories: action.payload.page }
    default:
      return state
  }
}