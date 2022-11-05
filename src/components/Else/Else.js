import classNames from 'classnames'
import { Button } from '../shared/Button'
import classes from './Else.module.scss'

export function Else() {
  const cn = classNames(classes.Else)

  return (
    <Button className={cn} onClick={() => {}}>
      показать ещё 5 билетов
    </Button>
  )
}
