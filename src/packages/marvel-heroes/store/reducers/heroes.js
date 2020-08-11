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
      return { ...state, heroesList: action.heroesList, loading: false }
    default:
      return state
  }
}