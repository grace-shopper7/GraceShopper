import React, { Component } from "react";
import { connect } from "react-redux";
import {addItemToCart} from "../store/cart"
import BookPreview from "./BookPreview";


class SingleAuthor extends Component {
  render() {

    if (this.props.author.length === 0) {
      return <div>Loading...</div>
    }

    const authorId = this.props.match.params.authorId;
    const filteredAuthor = this.props.author.filter(author => {
      return author.id === +authorId;
    });

    const selectedAuthor = filteredAuthor[0]

    return (
      <div id="books-by-genres">
      {selectedAuthor.books.map((book) => {
          return (
            <BookPreview key={book.id} book={book} author={selectedAuthor} />
            )
        })}
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
    author: state.authors
  };
};

// const mapDispatch = dispatch => ({
//   addItem: (book, id) => dispatch(addItemToCart(book, id))
// })

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  null
)(SingleAuthor);
