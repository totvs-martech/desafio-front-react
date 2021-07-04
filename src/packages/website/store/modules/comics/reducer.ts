import { Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { IComicsState } from './types'

const INITIAL_STATE: IComicsState = {
  results: [],
  count: 0,
  total: 0,
  limit: 0,
  offset: 0,
}

const comics: Reducer<IComicsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.comics };
    case 'COMICS_UPDATE_LIST': {
      const newState = { ...action.payload.data };
      return newState;
    }
  
    default:
      return state;
  }
}

export default comics
