export function getSortingCallback(param) {
  const cheepest = (a, b) => a.price - b.price
  const fastest = (a, b) => {
    const totalDuration = (segments) =>
      segments.reduce((total, segment) => total + segment.duration, 0)

    return totalDuration(a.segments) - totalDuration(b.segments)
  }
  const getLucky = (a, b) => {
    return a.price * Math.random() - b.price * Math.random()
  }
  const sorting = {
    cheepest,
    fastest,
    getLucky,
  }

  return sorting[param]
}
