import React from 'react';

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
    return (
      <div id="review-form-container">
        <h3>Tell your story</h3>
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

export default AddReviewForm
