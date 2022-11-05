//action types
export const SET_LAYOVER_FILTER = 'SET_LAYOVER_FILTER'
export const SORT_TICKETS = 'SORT_TICKETS'

// another constant
export const sorting = {
  CHEEPEST: 'cheepest',
  FASTEST: 'fastest',
  OPTIMAL: 'optimal',
}

const { OPTIMAL, FASTEST, CHEEPEST } = sorting

//actionCreators
export const getCheepest = (sorting) => {
  return {
    type: CHEEPEST,
    sorting,
  }
}

export const getFastest = (sorting) => {
  return {
    type: FASTEST,
    sorting,
  }
}

export const getOptimal = (sorting) => {
  return {
    type: OPTIMAL,
    sorting,
  }
}

export const setLayoverFilter = (filterID) => {
  return {
    type: SET_LAYOVER_FILTER,
    filterID,
  }
}

export const sortTickets = (buttonID) => {
  return {
    type: SORT_TICKETS,
    buttonID,
  }
}
