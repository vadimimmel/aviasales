import { Card } from '../Card'
import classes from './Results.module.scss'

export function Results() {
  return (
    <section className={classes.Results} role="main">
      <ul className={classes['Results_items']}>
        <li className={classes['Results_item']}>
          <Card />
        </li>
        <li className={classes['Results_item']}>
          <Card />
        </li>
        <li className={classes['Results_item']}>
          <Card />
        </li>
      </ul>
    </section>
  )
}
