export function getStories(heroeId) {
  return {
    type: 'GET_STORIES',
    payload: {
      heroeId
    }
  };
}