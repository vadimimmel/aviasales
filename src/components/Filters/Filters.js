import { connect } from 'react-redux'

import { setLayoverFilter } from '../../actions'

import { Checkbox } from '../shared/Checkbox'

import classes from './Filters.module.scss'

function Filters({ filters, setLayoverFilter }) {
  const changeFilter = (e) => {
    setLayoverFilter(e.target.id)
  }

  const filterList = filters.map((filter) => {
    const { id, value, status } = filter

    return (
      <Checkbox
        className={classes['Filters__label']}
        type="checkbox"
        id={id}
        key={id}
        onChange={changeFilter}
        checked={status}
      >
        {value}
      </Checkbox>
    )
  })

  return (
    <section className={classes.Filters}>
      <form>
        <fieldset className={classes['Filters__options']}>
          <legend className={classes['Filters__name']}>
            количество пересадок
          </legend>
          {filterList}
        </fieldset>
      </form>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.layoverFilter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLayoverFilter: (filterID) => dispatch(setLayoverFilter(filterID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
