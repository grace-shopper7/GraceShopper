import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";

/**
 * COMPONENT
 */
class SingleBook extends Component {
  render() {

    if (this.props.books.length === 0) {
      return <div>Loading...</div>
    }


    const bookId = this.props.match.params.bookId;
    const filteredBook = this.props.books.filter(book => {
      return book.id === +bookId;
    });

    const selectedBook = filteredBook[0]


    return (
      <div>
        <div>{selectedBook.imageUrl}</div>

        <div>
          <h3>{selectedBook.title}</h3>
          <div>example author name</div>
          <div>{`$${selectedBook.price}`}</div>
          <div>{`Date released: ${selectedBook.publicationDate}`}</div>
          <div>{selectedBook.genre}</div>
          <div>{selectedBook.condition}</div>
          <div>{selectedBook.description}</div>
        </div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    books: state.books
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  null
)(SingleBook);
