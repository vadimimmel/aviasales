import { SET_TICKET_SORTING } from '../actions'

export function ticketSorting(state = 'cheepest', action) {
  switch (action.type) {
    case SET_TICKET_SORTING:
      return action.buttonID
    default:
      return state
  }
}
