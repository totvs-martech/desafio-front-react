import { IComicsState } from "./types";

export function comicsUpdate(data: IComicsState[]) {
  return {
    type: 'COMICS_UPDATE_LIST',
    payload: {
      data
    }
  }
}