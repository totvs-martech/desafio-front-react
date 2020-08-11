import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  heroesList: []
}

export default function heroes(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: 
      return { ...state, ...action.payload }
    case 'GET_HEROE':
      return { ...state, loading: true }
    case 'HEROES_RECEIVED':
      return { 
        ...state,
        heroesList: action.characters.results, 
        limit: action.characters.limit, 
        total: action.characters.total, 
        loading: false 
      }
    case 'SET_PAGE_HEROES':
      return { ...state, page: action.characters.offset}
    default:
      return state
  }
}