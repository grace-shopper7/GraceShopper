import React from "react";
import { connect } from "react-redux";
import BookPreview from "./BookPreview";
import {getAllCarts} from '../store/cart'

class AllBooks extends React.Component {

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
  books: state.books,
  user: state.user
});

export default connect(mapState)(AllBooks);
