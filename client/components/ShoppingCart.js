import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemFromCart, checkoutCart } from "../store/cart";
import { convertPrice } from "../store/books";

class ShoppingCart extends React.Component {
  render() {
    const books = this.props.cart.active ? this.props.cart.active.books : [];
    const id = this.props.user.id;
    const user = this.props.user;
    const total =
      books && books.length
        ? convertPrice(books.reduce((acc, book) => acc + book.price, 0))
        : 0;
    return (
      <div id="shoppingcart">
        <div id="cartitems">
          {books ? (
            books.map(book => (
              <div className="cartitem" key={book.id}>
                <Link to={`books/${book.id}`}>
                  <img src={book.imageUrl} />
                </Link>
                <div>
                  <Link to={`books/${book.id}`}>
                    <h4>{book.title}</h4>
                  </Link>
                  <Link to={`authors/${book.author.id}`}>
                    <h5>
                      `{book.author.firstName} {book.author.lastName}`
                    </h5>
                  </Link>
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
          {books && books.length ? <div>{`Total: ${total}`}</div> : null}
          {user.firstName ? (
            <div>{`${user.firstName} ${user.lastName}`}</div>
          ) : null}
          {id ? (
            <Link to="/checkout">
              <button type="submit">Proceed to checkout</button>
            </Link>
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
