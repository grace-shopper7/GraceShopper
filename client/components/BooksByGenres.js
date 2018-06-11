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
            <div className="books-container" key={book.id}>
              <div id="book-cover" key={book.id}>
                <Link to={`/books/${book.id}`} >
                <img src={book.imageUrl}></img>
              <div className="genre-book-author">
              {`${book.title} by ${book.author.firstName} ${book.author.lastName}`}
              </div>
              </Link>
              </div>
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
