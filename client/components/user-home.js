import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email, user } = props;

  return user.id ? (
    <Link to={`user/${user.id}`}>
      <div className="navbar-writing" >{email}</div>
      <div>View Account</div>
    </Link>
  ) : null;
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    user: state.user
  };
};

export default connect(
  mapState,
  null
)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
