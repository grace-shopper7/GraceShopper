import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addedReview } from "../store/reviews";

class AddReviewForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let rating = event.target.rating.value;
    let text = event.target.text.value;
    let bookId = this.props.match.params.bookId;
    let userId = this.props.user.id;
    let formData = {
      rating,
      text,
      bookId,
      userId
    };
    this.props.addReview(formData, bookId);
    this.props.history.push(`/books/${bookId}`);
  }

  render() {
    if (this.props.books.length === 0) {
      return <div>Loading...</div>;
    }

    let currentBook = this.props.books.filter(book => {
      return book.id === +this.props.match.params.bookId;
    });

    return (
      <div id="review-form-container">
        <div id="review-book-info">
          <h2>Tell us about</h2>
          <div id="review-book-cover">
            <img src={currentBook[0].imageUrl} />
          </div>
          <h3>
            {`${currentBook[0].title} by ${currentBook[0].author.firstName} ${
              currentBook[0].author.lastName
            }`}
          </h3>
        </div>
        <div id="review-form-itself">
          <form id="review-form" onSubmit={this.handleSubmit}>
            <label htmlFor="rating"> Rating </label>
            <select name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
            <label htmlFor="text"> Description </label>
            <textarea name="text" placeholder="Write your review here" />
            <div id="review-form-buttons">
              <div id="review-cancel-button">
                <Link to={`/books/${this.props.match.params.bookId}`}>
                  <button type="button"> Cancel </button>
                </Link>
              </div>
              <div id="review-submit-button">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    books: state.books,
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    addReview: (formData, bookId) => dispatch(addedReview(formData, bookId))
  };
};

export default connect(
  mapState,
  mapDispatch
)(AddReviewForm);
