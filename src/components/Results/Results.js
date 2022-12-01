/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Card } from '../card'
import { ShowMore } from '../showMore'
import { withAviasalesService } from '../hoc'

import { compose } from '../../helpers'
import { fetchTickets } from '../../redux/actions'
import { normalizeData, getSortingCallback, getFilterCallback } from './helpers'

import styles from './results.module.scss'

function TicketList({
  tickets,
  ticketSorting,
  numberOfTicketsDisplayed,
  layoverFilter,
}) {
  const filterCallback = getFilterCallback(layoverFilter)
  const sortingCallback = getSortingCallback(ticketSorting)
  const ticketList = tickets
    .filter(filterCallback)
    .sort(sortingCallback)
    .slice(0, numberOfTicketsDisplayed)
    .map((ticket) => {
      const ticketData = normalizeData(ticket)
      const { id } = ticketData
      return (
        <li className={styles['Results__item']} key={id}>
          <Card ticketData={ticketData} />
        </li>
      )
    })

  return (
    <section className={styles.Results} role="main">
      {ticketList.length ? (
        <>
          <ul className={styles['Results__items']}>{ticketList}</ul>
          <ShowMore numberOfTickets={5} />
        </>
      ) : (
        'Рейсов, подходящих под заданные фильтры, не найдено \u{1F614}'
      )}
    </section>
  )
}

function Results({ searchID, fetchTickets, ...restProps }) {
  useEffect(() => {
    if (searchID) {
      fetchTickets(searchID)
    }
  }, [searchID, fetchTickets])

  return <TicketList {...restProps} />
}

const mapStateToProps = ({
  searchID,
  tickets,
  ticketSorting,
  numberOfTicketsDisplayed,
  layoverFilter,
}) => {
  return {
    searchID,
    tickets,
    ticketSorting,
    numberOfTicketsDisplayed,
    layoverFilter,
  }
}

const mapDispatchToProps = (dispatch, { aviasalesService }) => {
  return {
    fetchTickets: fetchTickets(dispatch, aviasalesService),
  }
}

export default compose(
  withAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Results)
