export function countLayovers(arrWithLayovers) {
  const base = 'пересад'
  const len = arrWithLayovers.length

  if (!len) return `без ${base}ок`

  return len === 1 ? `${len} ${base}ка` : `${len} ${base}ки`
}
