import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { UserHome } from "../components";

<<<<<<< HEAD
const Navbar = ({ handleClick, isLoggedIn, user }) => {
  console.log(user.admin);
  return (
    <div className="navbar">
      <h1 className="page-header">Barnes & Gable</h1>
      <nav>
        {isLoggedIn ? (
          <div className="navbar-features">
            <div className="navbar-links">
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
              {user.admin ? <Link to="/admin">Admin</Link> : null}
            </div>
            <UserHome />
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};
=======
const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className='navbar'>
    <h1 className="page-header">Barnes & Gable</h1>
    <nav >
      {isLoggedIn ? (
        <div className="navbar-features">
          <div className="navbar-links">
          <Link to="/home" className='home-link'>Home</Link>
          <a href="#" onClick={handleClick} className='logout-link'>
            Logout
          </a>
          </div>
          <UserHome />
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login" className='login'>Login</Link>
          <Link to="/signup"
          className='signup'>Sign Up</Link>
        </div>
      )}
       <hr />
    </nav>

  </div>
)
>>>>>>> 9ca913d1c90037a1e62ab55cda7f8533597c971d

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
