import classNames from 'classnames'

import styles from './Spinner.module.scss'

export function Spinner({ loading, children }) {
  const cn = classNames(styles.no_spinner, {
    [styles.spinner]: loading,
  })
  return <div className={cn}>{children}</div>
}
