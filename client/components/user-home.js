import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { gotUserReviews } from '../store/reviews'

/**
 * COMPONENT
 */

export class UserHome extends React.Component {
  componentDidMount () {
    this.props.gotUserReviews(this.props.userId)
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
    userId: state.user.id
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
