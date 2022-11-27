import { connect } from 'react-redux'

import { Image } from '../shared/Image'
import { Spinner } from '../Spinner'

import classes from './Logo.module.scss'

import logo from '../../icons/Logo.svg'

function Logo({ loading }) {
  return (
    <div className={classes.Logo} role="banner">
      <Spinner loading={loading}>
        <Image
          src={logo}
          alt="aviasales_logo"
          width={98}
          height={98}
          circle={true}
        />
      </Spinner>
    </div>
  )
}

const mapStateToProps = ({ loading }) => {
  return {
    loading,
  }
}

export default connect(mapStateToProps)(Logo)
