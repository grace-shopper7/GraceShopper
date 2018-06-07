import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Login, Signup, UserHome, AllBooks, AllAuthors } from './components'
import { me } from './store'
import { gotBooks } from './store/books'
import { gotAuthors } from './store/authors'
import SingleBook from './components/SingleBook'
import SingleAuthor from './components/SingleAuthor'
import AllGenres from './components/AllGenres'
import BooksByGenres from './components/BooksByGenres';

/**
 * COMPONENT
 */
class Routes extends Component {


  componentDidMount() {
    this.props.loadInitialData()
    this.props.gotBooks()
    this.props.gotAuthors()


  }

  render() {

    console.log(Login)

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/genres/:genre" component={BooksByGenres} />
            <Route exact path="/genres" component={AllGenres} />
            <Route exact path="/books/:bookId" component={SingleBook} />
            <Route exact path="/home" component={AllBooks} />
            <Route exact path="/authors/:authorId" component={SingleAuthor} />
            <Route exact path="/authors" component={AllAuthors} />
            <Route exact path="/" component={AllBooks} />
        {/* Displays our Login component as a fallback */}
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
    books: state.books,
    authors: state.authors
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    gotBooks: () => dispatch(gotBooks()),
    gotAuthors: () => dispatch(gotAuthors())
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
