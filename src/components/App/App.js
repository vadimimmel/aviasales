import { useEffect } from 'react'
import { connect } from 'react-redux'
// import { compose } from 'redux-thunk'

import classes from './App.module.scss'

import { Logo } from '../Logo'
import { Filters } from '../Filters'
import { Sort } from '../Sort'
import { Results } from '../Results'

import { withAviasalesService } from '../hoc'
import { setSearchID } from '../../actions'

function App({ searchID, setSearchID, aviasalesService }) {
  const { getSearchID } = aviasalesService
  useEffect(() => {
    if (!searchID) {
      getSearchID().then(setSearchID)
    }
  }, [searchID, getSearchID, setSearchID])
  return (
    <div className={classes.App}>
      <Logo />
      <Filters />
      <Sort />
      <Results />
    </div>
  )
}

const mapStateToProps = ({ searchID }) => {
  return {
    searchID,
  }
}

const mapDispatchToProps = {
  setSearchID,
}

export default withAviasalesService()(
  connect(mapStateToProps, mapDispatchToProps)(App)
)
