import { SORT_TICKETS, sorting } from '../actions'

const { CHEEPEST, FASTEST, OPTIMAL } = sorting

export function ticketSorting(state = 'cheepest', action) {
  switch (action.type) {
    case SORT_TICKETS:
      return action.buttonID
    case CHEEPEST:
      return 'cheepest'
    case FASTEST:
      return 'fastest'
    case OPTIMAL:
      return 'optimal'
    default:
      return state
  }
}
