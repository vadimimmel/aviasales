import { FETCH_TICKETS_FAILURE } from '../actions'

export function error(state = null, action) {
  switch (action.type) {
    case FETCH_TICKETS_FAILURE:
      return action.payload
    default:
      return state
  }
}
