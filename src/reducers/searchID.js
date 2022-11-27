import { SET_SEARCH_ID } from '../actions'

export function searchID(state = null, action) {
  switch (action.type) {
    case SET_SEARCH_ID:
      return action.searchID
    default:
      return state
  }
}
