export default function heroes(state = {}, action) {
  switch (action.type) {
    case 'GET_HEROE':
      return { ...state, loading: true };
    case 'HEROES_RECEIVED':
      return { ...state, heroesList: action.heroesList, loading: false }
    default:
      return state
  }
}