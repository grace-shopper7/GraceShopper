import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Link } from "react-router-dom";
import { addItemToCart } from "../store/cart";
import { convertPrice } from "../store/books";

/**
 * COMPONENT
 */
class SingleBook extends Component {
  render() {
    if (this.props.books.length === 0) {
      return <div>Loading...</div>;
    }

    const bookId = this.props.match.params.bookId;
    const filteredBook = this.props.books.filter(book => {
      return book.id === +bookId;
    });

    const selectedBook = filteredBook[0];
    const reviews = selectedBook.reviews ? selectedBook.reviews : null;

    return (
      <div id="single-book-view">
        <div>
          <img src={selectedBook.imageUrl} />
        </div>

        <div>
          <h3>{selectedBook.title}</h3>
          {reviews.length ? (
            <h3>
              {`${reviews.reduce((acc, review) => acc + review.rating, 0) /
                reviews.length} / 5`}
            </h3>
          ) : null}
          <div>
            {selectedBook.author.firstName} {selectedBook.author.lastName}
          </div>
          <div>{`$${convertPrice(selectedBook.price)}`}</div>
          <div>{`Date released: ${selectedBook.publicationDate}`}</div>
          <div>{selectedBook.genre.join(", ")}</div>
          <div>{selectedBook.condition}</div>
          <div>{selectedBook.description}</div>
        </div>

        <button
          type="submit"
          onClick={() => this.props.addItem(selectedBook, +this.props.user.id)}
        >
          Add to Cart
        </button>
        <div id="add-review-button">
          <Link to={`/new-review/${bookId}`}>
            <button type="button">Write a review</button>
          </Link>
        </div>
        <div id="bookreviews">
          {reviews.filter(review => review.text).map(review => (
            <div className="review" key={review.id}>
              {/* <h4>{`${review.user.firstName} ${review.user.lastName}: ${review.rating} / 5`}</h4> */}
              <p>{review.text}</p>
            </div>
          ))}
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
    books: state.books,
    user: state.user
  };
};

const mapDispatch = dispatch => ({
  addItem: (book, id) => dispatch(addItemToCart(book, id))
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  mapDispatch
)(SingleBook);
