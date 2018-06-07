import React from "react";
import { connect } from "react-redux";
import BookPreview from "./BookPreview";
import {getAllCarts} from '../store/cart'

class AllBooks extends React.Component {
  // // constructor(props) {
  // //   super(props);
  // // }

  componentDidMount(){
    if (this.props.user) this.props.getAllCarts(this.props.user.id)
  }

  render() {
    const books = this.props.books ? this.props.books : [];
    return (
      <div className="allbooks">
        {books.map(book => <BookPreview key={book.id} book={book} />)}
      </div>
    );
  }
}

const mapState = state => ({
  books: state.books,
  user: state.user
});

const mapDispatch = dispatch => ({
  getAllCarts: id => dispatch(getAllCarts(id))
})

export default connect(mapState, mapDispatch)(AllBooks);
