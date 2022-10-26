import classNames from "classnames";

import './ButtonGroup'

export const ButtonGroup = ({ 
  children, className, vertical, groupSize, ...attrs
}) => {

  const classes = classNames(
    'ButtonGroup',
    className,
    { vertical },
  )

  return (
    <div
      className={classes}
      style={styles}
      {...attrs}
    >
      {children}
    </div>
  )
}

ButtonGroup.defaultProps = {
  children: null,
  className: '',
}
