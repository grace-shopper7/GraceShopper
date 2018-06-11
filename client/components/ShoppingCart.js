import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart, checkoutCart } from "../store/cart";
import { convertPrice } from "../store/books";

class ShoppingCart extends React.Component {
  render() {
    const books = this.props.cart.active ? this.props.cart.active.books : [];
    const id = this.props.user.id;
    const user = this.props.user;
    return (
      <div id="shoppingcart">
        <div>
          {books && books.length ? (
            books.map(book => (
              <div className="cartitem" key={book.id}>
                <img src={book.imageUrl} />
                <div>
                  <h4>{book.title}</h4>
                  <h5>
                    `{book.author.firstName} {book.author.lastName}`
                  </h5>
                  <h3>{`$${convertPrice(book.price)}`}</h3>
                </div>
                <button
                  type="submit"
                  onClick={() => this.props.removeItem(book, id)}
                >
                  Remove from cart
                </button>
              </div>
            ))
          ) : (
            <h2>Your cart is empty</h2>
          )}
        </div>
        <div id="cartoptions">
          {books && books.length ? (
            <div>{`Total: ${convertPrice(
              books.reduce((acc, book) => acc + book.price, 0)
            )}`}</div>
          ) : null}
          {user.firstName ? (
            <div>{`${user.firstName} ${user.lastName}`}</div>
          ) : null}
          {id ? (
            <button type="submit" onClick={() => this.props.checkout(id)}>
              Checkout
            </button>
          ) : (
            <div>Please log in to view your cart</div>
          )}
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
