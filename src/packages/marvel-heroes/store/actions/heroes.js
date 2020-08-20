export const actionTypes = {
  GET_HEROES: 'GET_HEROES',
  GET_PAGE_HEROES: 'GET_PAGE_HEROES',
  GET_HEROE_INFO: 'GET_HEROE_INFO',
  HEROE_INFO_RECEIVED: 'HEROE_INFO_RECEIVED'
}

export function getHeroes() {
  return {
    type: 'GET_HEROES'
  };
}

export function pageHeroes(page) {
  return {
    type: 'GET_PAGE_HEROES',
    payload: {
      page
    }
  }
}

export function getHeroeInfo(id) {
  return {
    type: actionTypes.GET_HEROE_INFO,
    payload: {
      id
    }
  }
}