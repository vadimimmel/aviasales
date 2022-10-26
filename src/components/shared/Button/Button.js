import classNames from 'classnames'

import classes from './Button.module.scss'

export function Button({
  className,
  onClick,
  disabled,
  active,
  children,
  ...attrs
}) {
  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault()
    } else {
      return onClick(e)
    }
  }

  const cn = classNames(
    {
      [classes.Button]: true,
      [classes['Button_active']]: active,
    },
    className
  )

  const Tag = attrs.href ? 'a' : 'button'

  return (
    <Tag className={cn} onClick={onClickAction} disabled={disabled} {...attrs}>
      {children}
    </Tag>
  )
}

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
}
