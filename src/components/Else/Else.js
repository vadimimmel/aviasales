import classNames from 'classnames'
import { connect } from 'react-redux'

import { Button } from '../shared/Button'

import classes from './Else.module.scss'

import { setNumberOfTicketsDisplayed } from '../../actions'

function Else({ setNumberOfTicketsDisplayed }) {
  const cn = classNames(classes.Else)

  const numberOfTickets = 5

  return (
    <Button
      className={cn}
      onClick={() => {
        setNumberOfTicketsDisplayed(numberOfTickets)
      }}
    >
      показать ещё {numberOfTickets} билетов
    </Button>
  )
}

export default connect(null, { setNumberOfTicketsDisplayed })(Else)
