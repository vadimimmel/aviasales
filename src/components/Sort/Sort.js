import { Button } from '../shared/Button'
import classes from './Sort.module.scss'

const buttonsConfig = [
  { id: 'cheepest', value: 'самый дешёвый' },
  { id: 'fastest', value: 'самый быстрый' },
  { id: 'optimal', value: 'оптимальный' },
]

export function Sort() {
  const sortingButtons = buttonsConfig.map((item) => {
    const { id, value } = item
    let active = false

    if (id === 'cheepest') active = true

    return (
      <Button
        className={classes['Sort__button']}
        onClick={false}
        active={active}
        key={id}
      >
        {value}
      </Button>
    )
  })

  return (
    <section className={classes.Sort} role="toolbar">
      {sortingButtons}
    </section>
  )
}
