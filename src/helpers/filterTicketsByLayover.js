export function filterTicketsByLayover(layoverFilter) {
  const layovers = []

  for (let filter of layoverFilter) {
    const { status, filterValue } = filter
    if (filterValue !== null && status === true) {
      layovers[filterValue] = filterValue
    }
  }

  return function filter(ticket) {
    const { segments } = ticket
    return segments.every((segment) => {
      return typeof layovers[segment.stops.length] === 'number'
    })
  }
}
