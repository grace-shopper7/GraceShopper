import React from 'react';
import { connect } from 'react-redux';

class AddReviewForm extends React.Component {
  constructor () {
    super()
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToBook = this.redirectToBook.bind(this);
  }

  // handleSubmit (event) {
  //   event.preventDefault();
  //   this.props.history.push(`/books/${this.props.match.params.studentId}`)
  // }

  redirectToBook () {
    this.props.history.push(`/books/${this.props.match.params.bookId}`)
  }

  render () {
    if (this.props.books.length === 0){
      return <div>Loading...</div>
    }

    let currentBook = this.props.books.filter((book) => {
      return (book.id === +this.props.match.params.bookId)
    })
    console.log(currentBook[0])

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
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          <label htmlFor="text"> Description </label>
            <textarea name="text" > Enter text here...</textarea>
          <div id="review-submit-button">
            <button type="button" onClick={this.redirectToBook}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    books: state.books
  }
}

export default connect(mapState, null)(AddReviewForm)
