import React from 'react';
import { connect } from 'react-redux';
import { addedReview } from '../store/reviews'

class AddReviewForm extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.redirectToBook = this.redirectToBook.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    let rating = event.target.rating.value;
    let text = event.target.text.value;
    let bookId = this.props.match.params.bookId;
    let userId = this.props.userId;
    let formData = {
      rating,
      text,
      bookId,
      userId
    }
    this.props.addedReview(formData)
    this.props.history.push(`/books/${+this.props.match.params.bookId}`)
  }

  // redirectToBook () {
  //   this.props.history.push(`/books/${this.props.match.params.bookId}`)
  // }

  render () {
    if (this.props.books.length === 0){
      return <div>Loading...</div>
    }

    let currentBook = this.props.books.filter((book) => {
      return (book.id === +this.props.match.params.bookId)
    })

    return (
      <div id="review-form-container">
        <h2>Tell us about</h2>
        <div className="book-cover">
          <img src={currentBook[0].imageUrl} />
        </div>
        <h3>{`${currentBook[0].title} by ${currentBook[0].author.firstName} ${currentBook[0].author.lastName}`}
        </h3>
        <form id="review-form" >
          <label htmlFor="rating"> Rating </label>
            <select name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          <label htmlFor="text"> Description </label>
            <textarea name="text" > Enter text here...</textarea>
          <div id="review-submit-button">
            <button type="submit" >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    books: state.books,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    addedReview: (formData) => dispatch(addedReview(formData))
  }
}

export default connect(mapState, mapDispatch)(AddReviewForm)
