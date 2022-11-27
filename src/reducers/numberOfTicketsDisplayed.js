import { SET_NUMBER_OF_TICKETS_DISPLAYED } from '../actions'

export function numberOfTicketsDisplayed(state = 5, action) {
  switch (action.type) {
    case SET_NUMBER_OF_TICKETS_DISPLAYED:
      return state + action.numberOfTickets
    default:
      return state
  }
}
