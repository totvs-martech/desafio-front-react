import { IStoriesState } from "./types";

export function storiesUpdate(data: IStoriesState[]) {
  return {
    type: 'STORIES_UPDATE_LIST',
    payload: {
      data
    }
  }
}