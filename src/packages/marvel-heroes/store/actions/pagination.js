export const actionTypes = {
  SET_HEROES_PAGE: 'SET_HEROES_PAGE',
  SET_STORIES_PAGE: 'SET_STORIES_PAGE'
}

export function setHeroesPage(page) {
  return {
    type: actionTypes.SET_HEROES_PAGE,
    payload: {
      page
    }
  }
}

export function setStoriesPage(page) {
  return {
    type: actionTypes.SET_STORIES_PAGE,
    payload: {
      page
    }
  }
}