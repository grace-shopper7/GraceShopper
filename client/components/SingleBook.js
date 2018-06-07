import React, { Component } from "react";
import { connect } from "react-redux";
import {addItemToCart} from "../store/cart"

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
        <div><img src={selectedBook.imageUrl}/></div>

        <div>
          <h3>{selectedBook.title}</h3>
          <div>{selectedBook.author.firstName} {selectedBook.author.lastName}</div>
          <div>{`$${selectedBook.price}`}</div>
          <div>{`Date released: ${selectedBook.publicationDate}`}</div>
          <div>{selectedBook.genre}</div>
          <div>{selectedBook.condition}</div>
          <div>{selectedBook.description}</div>
        </div>

        <button type="submit" onClick={() => this.props.addItem(selectedBook, +this.props.user.id)}>Add to Cart</button>
      </div>
    );
  }
}

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    books: state.books,
    user: state.user
  };
};

const mapDispatch = dispatch => ({
  addItem: (book, id) => dispatch(addItemToCart(book, id))
})

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  mapDispatch
)(SingleBook);
