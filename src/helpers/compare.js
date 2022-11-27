export function compare(param) {
  const cheepest = (a, b) => a.price - b.price
  const fastest = (a, b) => {
    const totalDuration = (segments) =>
      segments.reduce((total, segment) => total + segment.duration, 0)

    return totalDuration(a.segments) - totalDuration(b.segments)
  }
  const optimal = () => {}
  const sorting = {
    cheepest,
    fastest,
    optimal,
  }

  return sorting[param]
}
