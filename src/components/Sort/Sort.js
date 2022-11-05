import { connect } from 'react-redux'

import { sortTickets } from '../../services/actions'

import { Button } from '../shared/Button'

import classes from './Sort.module.scss'

const buttonsConfig = [
  { id: 'cheepest', value: 'самый дешёвый' },
  { id: 'fastest', value: 'самый быстрый' },
  { id: 'optimal', value: 'оптимальный' },
]

function Sort({ sorting, sortTickets }) {
  const sortingButtons = buttonsConfig.map((button) => {
    const { id, value } = button
    const active = id === sorting ? true : false
    const sort = (e) => {
      sortTickets(e.target.id)
    }

    return (
      <Button
        className={classes['Sort__button']}
        onClick={sort}
        active={active}
        id={id}
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

const mapStatetoProps = (state) => {
  return {
    sorting: state.ticketSorting,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortTickets: (buttonID) => dispatch(sortTickets(buttonID)),
  }
}

// результат будет таким же как для (dispatch) => bindActionCreators(actions, dispatch) вместо actions
export default connect(mapStatetoProps, mapDispatchToProps)(Sort)
