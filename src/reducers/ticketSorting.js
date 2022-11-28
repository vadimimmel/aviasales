import { SORT_TICKETS } from '../actions'

export function ticketSorting(state = 'cheepest', action) {
  switch (action.type) {
    case SORT_TICKETS:
      return action.buttonID
    default:
      return state
  }
}
