import { Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { ICharactersState } from './types'

const INITIAL_STATE: ICharactersState = {
  results: [],
  count: 0,
  total: 0,
  limit: 0,
  offset: 0,
}

const character: Reducer<ICharactersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.character };
    case 'CHARACTERS_UPDATE_LIST': {
      const newState = { ...action.payload.data };
      return newState;
    }
  
    default:
      return state;
  }
}

export default character
