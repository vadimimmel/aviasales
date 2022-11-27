//action types
export const SET_LAYOVER_FILTER = 'SET_LAYOVER_FILTER'
export const SORT_TICKETS = 'SORT_TICKETS'
export const SET_SEARCH_ID = 'SET_SEARCH_ID'
export const SET_TICKETS = 'SET_TICKETS'
export const SET_LOADING = 'SET_LOADING'
export const SET_NUMBER_OF_TICKETS_DISPLAYED = 'SET_NUMBER_OF_TICKETS_DISPLAYED'

// another constants
export const sorting = {
  CHEEPEST: 'cheepest',
  FASTEST: 'fastest',
  OPTIMAL: 'optimal',
}

//actionCreators
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

export const setSearchID = (searchID) => {
  return {
    type: SET_SEARCH_ID,
    searchID,
  }
}

export const setTickets = (tickets) => {
  return {
    type: SET_TICKETS,
    tickets,
  }
}

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    isLoading,
  }
}

export const setNumberOfTicketsDisplayed = (numberOfTickets) => {
  return {
    type: SET_NUMBER_OF_TICKETS_DISPLAYED,
    numberOfTickets,
  }
}
