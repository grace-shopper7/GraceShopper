import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BookPreview from "./BookPreview";

class AllBooks extends React.Component {
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
            <div key={book.id}>
              <Link to={`/books/${book.id}`} >{book.title}</Link>
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

export default connect(mapState)(AllBooks);
