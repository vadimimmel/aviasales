import classes from './App.module.scss'
import { Logo } from '../Logo'
import { Filters } from '../Filters'
import { Sort } from '../Sort'
import { Results } from '../Results'
import { Else } from '../Else'

export function App() {
  return (
    <div className={classes.App}>
      <Logo />
      <Filters />
      <Sort />
      <Results />
      <Else />
    </div>
  )
}
