/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setTickets, setLoading } from '../../actions'

import { Card } from '../Card'
import { Else } from '../Else'

import classes from './Results.module.scss'

import { withAviasalesService } from '../hoc'

import { normalizeData, compare, filterTicketsByLayover } from '../../helpers'

function Results({
  searchID,
  tickets,
  ticketSorting,
  numberOfTicketsDisplayed,
  layoverFilter,
  setTickets,
  setLoading,
  aviasalesService,
}) {
  const { getPartTickets } = aviasalesService

  useEffect(() => {
    if (searchID) {
      const getTickets = async (searchID) => {
        let isMore = true

        while (isMore) {
          const { tickets, stop } = await getPartTickets(searchID)

          setTickets(tickets)
          setLoading(!stop)
          isMore = !stop
        }
      }

      getTickets(searchID)
    }
  }, [searchID, setTickets, setLoading, getPartTickets])

  const filter = filterTicketsByLayover(layoverFilter)
  const sortingType = compare(ticketSorting)
  const ticketList = tickets
    .filter(filter)
    .sort(sortingType)
    .slice(0, numberOfTicketsDisplayed)
    .map((ticket) => {
      const ticketData = normalizeData(ticket)
      const { id } = ticketData
      return (
        <li className={classes['Results_item']} key={id}>
          <Card ticketData={ticketData} />
        </li>
      )
    })

  return (
    <section className={classes.Results} role="main">
      {ticketList.length ? (
        <>
          <ul className={classes['Results_items']}>{ticketList}</ul>
          <Else />
        </>
      ) : (
        'Рейсов, подходящих под заданные фильтры, не найдено \u{1F614}'
      )}
    </section>
  )
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

export default withAviasalesService()(
  connect(mapStateToProps, { setTickets, setLoading })(Results)
)
