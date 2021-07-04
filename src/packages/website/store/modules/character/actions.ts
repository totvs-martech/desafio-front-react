import { ICharactersState } from "./types";

export function charactersUpdate(data: ICharactersState[]) {
  return {
    type: 'CHARACTERS_UPDATE_LIST',
    payload: {
      data
    }
  }
}