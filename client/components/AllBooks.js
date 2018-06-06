import React from "react";
import { connect } from "react-redux";
import BookPreview from "./BookPreview";

class AllBooks extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    const books = this.props.books ? this.props.books : [];
    return (
      <div id="allbooks">
        {books.map(book => <BookPreview key={book.id} book={book} />)}
      </div>
    );
  }
}

const mapState = state => ({
  books: state.books
});

export default connect(mapState)(AllBooks);
