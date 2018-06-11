import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { gotUserReviews } from '../store/reviews'

/**
 * COMPONENT
 */

export class UserHome extends React.Component {
  componentDidMount () {
    if (this.props.user) this.props.gotUserReviews(this.props.user.id)
  }

  render () {
    return (
      <h3 className="navbar-writing">Welcome, {this.props.email}</h3>
  )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    gotUserReviews: (userId) => dispatch(gotUserReviews(userId))
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
