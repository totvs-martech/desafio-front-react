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