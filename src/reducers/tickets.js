import { SET_TICKETS } from '../actions'

export function tickets(state = [], action) {
  switch (action.type) {
    case SET_TICKETS:
      return [...state, ...action.tickets]
    default:
      return state
  }
}
