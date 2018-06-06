import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, AllBooks, Sidebar} from './components'
import {me} from './store'
import { gotBooks } from './store/books'
import SingleBook from   './components/SingleBook'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    console.log(this.props)
    this.props.gotBooks()
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props
    console.log(Login)

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {
          isLoggedIn &&
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route path="/books/:bookId" component={SingleBook} />
              {/* <Route path="/home" component={UserHome} /> */}
              <Route path="/home" component={AllBooks} />
            </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    books: state.books
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    },
    gotBooks: () => dispatch(gotBooks())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
