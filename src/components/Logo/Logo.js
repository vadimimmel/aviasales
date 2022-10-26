import logo from '../../icons/Logo.svg'
import { Image } from '../shared/Image'

import classes from './Logo.module.scss'

export function Logo() {
  return (
    <div className={classes.Logo} role="banner">
      <Image
        className={classes['Logo_img']}
        src={logo}
        alt="aviasales_logo"
        width={60}
        height={60}
        circle
      />
    </div>
  )
}
