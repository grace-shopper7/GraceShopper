import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BookPreview from "./BookPreview";

class BooksByGenres extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    let selectedGenre = this.props.match.params.genre;

    return (
    <div id="books-by-genres">
      {this.props.books.map((book) => {
        if (book.genre.includes(selectedGenre)){
          return (
            <div id="books-container">
              <div id="book-cover" key={book.id}>
                <Link to={`/books/${book.id}`} >
                <img src={book.imageUrl}></img>
              {`${book.title} by ${book.author.firstName} ${book.author.lastName}`}
              </Link>
              </div>
            </div>
          )
        }
      })}
    </div>
    )
    // return (
    //   <div id="genre-param">{this.props.match.params.genre}</div>
    // )
  }
}

const mapState = state => ({
  books: state.books
});

export default connect(mapState)(BooksByGenres);
