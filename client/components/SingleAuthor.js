import React, { Component } from "react";
import { connect } from "react-redux";
import {addItemToCart} from "../store/cart"


class SingleAuthor extends Component {
  render() {

    if (this.props.author.length === 0) {
      return <div>Loading...</div>
    }

    const authorId = this.props.match.params.authorId;
    const filteredAuthor = this.props.author.filter(author => {
      return author.id === +authorId;
    });

    const selectedAuthor = filteredAuthor[0]


    return (
      <div>
        <div><img src={selectedAuthor.imageUrl}/></div>

        <div>
          <div>{selectedAuthor.firstName} {selectedAuthor.lastName}</div>
          <div>Born in: {selectedAuthor.countryOfOrigin}, in {selectedAuthor.DateOfBirth}</div>
          <div>{selectedAuthor.bio}</div>
        </div>

        {/* <button type="submit" onClick={() => this.props.addItem(selectedBook, +this.props.user.id)}>Add to Cart</button> */}
      </div>
    );
  }
}

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    books: state.books,
    author: state.authors
  };
};

// const mapDispatch = dispatch => ({
//   addItem: (book, id) => dispatch(addItemToCart(book, id))
// })

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  null
)(SingleAuthor);
