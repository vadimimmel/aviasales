export function getSortingCallback(param) {
  const cheepest = (a, b) => a._price - b._price
  const fastest = (a, b) => a._duration - b._duration
  const getLucky = (a, b) => {
    return a._price * Math.random() - b._price * Math.random()
  }
  const sorting = {
    cheepest,
    fastest,
    getLucky,
  }

  return sorting[param]
}
