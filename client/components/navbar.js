import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { UserHome } from '../components'

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

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
