import { FETCH_TICKETS_SUCCESS } from '../actions'

export function tickets(state = [], action) {
  switch (action.type) {
    case FETCH_TICKETS_SUCCESS:
      return [...state, ...action.tickets]
    default:
      return state
  }
}
