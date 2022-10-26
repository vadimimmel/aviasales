import classNames from 'classnames'
import { useState } from 'react'

import classes from './Checkbox.module.scss'

export function Checkbox({ children, id, className, onChange, ...attrs }) {
  //eslint-disable-next-line
  const [checked, setChecked] = useState(false)

  const cn = classNames(classes.checkbox, className)

  return (
    <label className={cn}>
      <input
        className={classes['checkbox__input']}
        name={id}
        id={id}
        checked={checked}
        onChange={onChange}
        {...attrs}
      />
      <span className={classes['checkbox__custom']}></span>
      {children}
    </label>
  )
}

Checkbox.defaultProps = {
  id: '',
  children: '',
  className: '',
  onChange: () => {},
}
