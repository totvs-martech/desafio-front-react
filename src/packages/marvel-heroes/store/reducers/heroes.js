import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes as heroesActionTypes } from '../actions/heroes';

const initialState = {
  heroesList: [],
  characterInfo: {
    name: '',
    thumbnail: {
      path: '',
      extension: ''
    },
    comics: {
      avaliable: 0
    },
    stories: {
      avaliable: 0
    },
    series: {
      avaliable: 0
    }
  }
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
    case heroesActionTypes.HEROE_INFO_RECEIVED:
      return { ...state, characterInfo: action.characterInfo }
    default:
      return state
  }
}