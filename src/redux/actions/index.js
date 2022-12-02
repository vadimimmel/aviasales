//action types
export const FETCH_SEARCH_ID = 'FETCH_SEARCH_ID'
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS'
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE'
export const SET_LAYOVER_FILTER = 'SET_LAYOVER_FILTER'
export const SET_LOADING = 'SET_LOADING'
export const SET_TICKET_SORTING = 'SET_TICKET_SORTING'
export const ADD_TICKETS_DISPLAYED = 'ADD_TICKETS_DISPLAYED'

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
    type: SET_TICKET_SORTING,
    buttonID,
  }
}

export const setSearchID = (searchID) => {
  return {
    type: FETCH_SEARCH_ID,
    searchID,
  }
}

export const setTickets = (tickets) => {
  return {
    type: FETCH_TICKETS_SUCCESS,
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
    type: ADD_TICKETS_DISPLAYED,
    numberOfTickets,
  }
}

export const ticketsError = (error) => {
  return {
    type: FETCH_TICKETS_FAILURE,
    payload: error,
  }
}

// ВАРИАНТ БЕЗ ACTION CREATOR

// export const fetchSearchID = (dispatch, aviasalesService) => () => {
//   aviasalesService
//     .getSearchID()
//     .then((data) => dispatch(setSearchID(data)))
//     .catch((error) => dispatch(ticketsError(error)))
// }

// export const fetchTickets =
//   (dispatch, aviasalesService) => async (searchID) => {
//     try {
//       let isMore = true

//       while (isMore) {
//         const { tickets, stop } = await aviasalesService.getPartTickets(
//           searchID
//         )

//         dispatch(setTickets(tickets))
//         dispatch(setLoading(!stop))
//         isMore = !stop
//       }
//     } catch (error) {
//       dispatch(ticketsError(error))
//     }
//   }

//ВАРИАНТ С ACTION CREATOR, ИСПОЛЬЗУЯ БИБЛИОТЕКУ THUNK

export const fetchSearchID = (aviasalesService) => () => (dispatch) => {
  aviasalesService
    .getSearchID()
    .then((data) => dispatch(setSearchID(data)))
    .catch((error) => dispatch(ticketsError(error)))
}

export const fetchTickets =
  (aviasalesService) => (searchID) => async (dispatch) => {
    try {
      let isMore = true

      while (isMore) {
        const { tickets, stop } = await aviasalesService.getPartTickets(
          searchID
        )

        dispatch(setTickets(tickets))
        dispatch(setLoading(!stop))
        isMore = !stop
      }
    } catch (error) {
      dispatch(ticketsError(error))
    }
  }
