import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BookPreview from "./BookPreview";

class BooksByGenres extends React.Component {

  render() {
    let selectedGenre = this.props.match.params.genre;

    return (
    <div id="books-by-genres">
      {this.props.books.map((book) => {
        if (book.genre.includes(selectedGenre)){
          return (
            <BookPreview key={book.id} book={book} />
            )
          }
        })}
      </div>
    )
  }
}

const mapState = state => ({
  books: state.books
});

export default connect(mapState)(BooksByGenres);
