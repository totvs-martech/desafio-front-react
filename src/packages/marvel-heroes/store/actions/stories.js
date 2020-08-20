export const actionTypes = {
  GET_STORIES: 'GET_STORIES',
  STORIES_RECEIVED: 'STORIES_RECEIVED',
  GET_STORIE: 'GET_STORIE',
  STORIE_RECEIVED: 'STORIE_RECEIVED',
  GET_PAGE_STORIES: 'GET_PAGE_STORIES',
  SET_PAGE_STORIES: 'SET_PAGE_STORIES'
};

export function getStories(heroeId) {
  return {
    type: actionTypes.GET_STORIES,
    payload: {
      heroeId
    }
  };
}

export function pageStories(page, heroeId) {
  return {
    type: actionTypes.GET_PAGE_STORIES,
    payload: {
      page,
      heroeId
    }
  }
}

export function getStorie(storieId) {
  return {
    type: actionTypes.GET_STORIE,
    payload: {
      storieId
    }
  }
}