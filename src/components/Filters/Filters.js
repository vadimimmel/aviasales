import { Checkbox } from '../shared/Checkbox'

import classes from './Filters.module.scss'

const checkboxConfig = [
  { id: 'all', text: 'Все' },
  { id: 'direct', text: 'Без пересадок' },
  { id: 'oneLayover', text: '1 пересадка' },
  { id: 'twoLayovers', text: '2 пересадки' },
  { id: 'threeLayovers', text: '3 пересадки' },
]

export function Filters() {
  // const [ all, setAll] = useState(false)
  // const [ direct, setDirect ] = useState(false)
  // const [ oneLayover, setOneLayover ] = useState(false)
  // const [ twoLayovers, setTwoLayovers ] = useState(false)
  // const [ threeLayovers, setThreeLayovers ] = useState(false)

  // const stateFuncList = {
  //   all: setAll,
  //   direct: setDirect,
  //   oneLayover: setOneLayover,
  //   twoLayovers: setTwoLayovers,
  //   threeLayovers: setThreeLayovers,
  // }

  //eslint-disable-next-line
  const handleChange = (e) => {
    // const target = e.target
    // const name = target.name
    // const value =
    // if (name === 'all') {
    //   Object.keys(stateFuncList).forEach(item => stateFuncList[item](value))
    // } else {
    //   stateFuncList[name](value)
    // }
  }

  const checkboxList = checkboxConfig.map((item) => {
    const { id, text } = item

    return (
      <Checkbox
        className={classes['Filters__label']}
        type="checkbox"
        id={id}
        key={id}
        onChange={handleChange}
      >
        {text}
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
          {checkboxList}
        </fieldset>
      </form>
    </section>
  )
}
