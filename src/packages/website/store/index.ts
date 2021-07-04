import { createStore } from 'redux'
import { createWrapper } from "next-redux-wrapper";

import rootReducer from './modules/rootReducer'

import { ICharactersState } from './modules/character/types';
import { IStoriesState } from './modules/stories/types';
import { IComicsState } from './modules/comics/types';

export interface IState {
  character: ICharactersState
  stories: IStoriesState
  comics: IComicsState
}

const makeStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
