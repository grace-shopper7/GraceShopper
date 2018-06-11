import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Login, Signup, AllBooks, AllAuthors, AddReviewForm, ShoppingCart, PreviousPurchases } from './components'
import { me } from './store'
import { gotBooks } from './store/books'
import { gotAuthors } from './store/authors'
import SingleBook from './components/SingleBook'
import SingleAuthor from './components/SingleAuthor'
import AllGenres from './components/AllGenres'
import BooksByGenres from './components/BooksByGenres';
import UserAccount from './components/UserAccount'
import UserDetailsAdd from './components/UserDetailsAdd'
import UserDetailsEdit from './components/UserDetailsEdit'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.gotBooks();
    this.props.gotAuthors();
  }

  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/genres/:genre" component={BooksByGenres} />
            <Route exact path="/genres" component={AllGenres} />
            <Route exact path="/books/:bookId" component={SingleBook} />
            <Route exact path="/new-review/:bookId" component={AddReviewForm} />
            <Route exact path="/home" component={AllBooks} />
            <Route exact path="/authors/:authorId" component={SingleAuthor} />
            <Route exact path="/cart" component={ShoppingCart} />
            <Route exact path="/history" component={PreviousPurchases} />
            {/* <Route exact path="/authors/:authorId" component={BooksByGenres} /> */}
            <Route exact path="/user/" component={UserAccount} />
            <Route path='/user/add/address' component={UserDetailsAdd} />
            <Route exact path='/user/edit/address' component={UserDetailsEdit} />
            <Route exact path="/authors" component={AllAuthors} />
            <Route exact path="/" component={AllBooks} />
        {/* Displays our Login component as a fallback */}
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    books: state.books,
    authors: state.authors
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    gotBooks: () => dispatch(gotBooks()),
    gotAuthors: () => dispatch(gotAuthors())
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
