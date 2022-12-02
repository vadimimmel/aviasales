import { connect } from 'react-redux'

import { Image } from '../shared/image'
import { Spinner } from '../spinner'

import classes from './logo.module.scss'

import logo from '../../assets/icons/Logo.svg'

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
