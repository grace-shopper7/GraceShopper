import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { gotUserReviews } from "../store/reviews";
import { Link } from "react-router-dom";
import { gotAddress } from "../store/address";

/**
 * COMPONENT
 */

export class UserHome extends React.Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.gotUserReviews(this.props.user.id);
      this.props.gotAddress(this.props.user.id);
    }
  }

  render() {
<<<<<<< HEAD
    return (
      // <Link to='/user'>
      <div className="navbar-writing">Welcome, {this.props.email}</div>
      // <div>View account details</div>
      // </Link>
    );
=======
    return  (
    <Link to='/user'>
    <div className="navbar-writing">
    <div >Welcome, {this.props.email}</div>
    <div >View account details</div>
    </div>
    </Link>
    )
>>>>>>> 4bdcb3fadc940238b801703d307e22196dafc492
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

const mapDispatch = dispatch => {
  return {
    gotUserReviews: userId => dispatch(gotUserReviews(userId)),
    gotAddress: id => dispatch(gotAddress(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
