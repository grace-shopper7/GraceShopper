import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { gotUserReviews } from '../store/reviews'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {
  componentDidMount () {
    if (this.props.user) this.props.gotUserReviews(this.props.user.id)
  }



  render () {
    const { email, user } = this.props;

    return user.id ? (
      <Link to={`user/${user.id}`}>
        <div className="navbar-writing" >{email}</div>
        <div>View Account</div>
      </Link>
    ) : null;
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    user: state.user
  };
};


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
};
