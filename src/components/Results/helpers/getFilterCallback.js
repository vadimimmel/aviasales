export function getFilterCallback(layoverFilter) {
  const layovers = []

  for (let filter of layoverFilter) {
    const { status, filterValue } = filter
    if (filterValue !== null && status === true) {
      layovers[filterValue] = filterValue
    }
  }

  return (ticket) => {
    const { segments } = ticket
    return segments.every((segment) => {
      const len = segment.stops.length

      return layovers.includes(len)
    })
  }
}
