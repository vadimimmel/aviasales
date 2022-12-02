export function getFilterCallback(layoverFilter) {
  const layovers = []
  layoverFilter.forEach((filt) => {
    const { status, filterValue } = filt
    if (filterValue !== null && status === true) {
      layovers.push(filterValue)
    }
  })

  return (ticket) => {
    const { stops, backStops } = ticket

    return [stops, backStops].every((item) => {
      const quantity = item.split(', ').length
      return layovers.includes(quantity)
    })
  }
}
