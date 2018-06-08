import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart, checkoutCart } from "../store/cart";

class ShoppingCart extends React.Component {
  render() {
    const books = this.props.cart.active ? this.props.cart.active.books : [];
    const id = this.props.user.id;
    console.log(books);
    return (
      <div id="shoppingcart">
        <div>
          {books
            ? books.map(book => (
                <div className="cartitem" key={book.id}>
                  <img src={book.imageUrl} />
                  <div>
                    <h4>{book.title}</h4>
                    <h5>
                      `{book.author.firstName} {book.author.lastName}`
                    </h5>
                    <h3>{`$${book.price}`}</h3>
                  </div>
                  <button
                    type="submit"
                    onClick={() => this.props.removeItem(book, id)}
                  >
                    Remove from cart
                  </button>
                </div>
              ))
            : null}
        </div>
        <div id="cartoptions">
          {books && books.length ? (
            <div>{`Total: ${books.reduce(
              (acc, book) => acc + book.price,
              0
            )}`}</div>
          ) : null}
          <button type="submit" onClick={() => this.props.checkout(id)}>
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
  cart: state.cart
});

const mapDispatch = dispatch => ({
  checkout: id => dispatch(checkoutCart(id)),
  removeItem: (book, id) => dispatch(removeItemFromCart(book, id))
});

export default connect(
  mapState,
  mapDispatch
)(ShoppingCart);
