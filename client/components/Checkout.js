import React from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../store/cart";
import { convertPrice } from "../store/books";

class Checkout extends React.Component {
  render() {
    const books = this.props.cart.active ? this.props.cart.active.books : [];
    const id = this.props.user.id;
    const user = this.props.user;
    return (
      <div id="checkout">
        <div>
          {books && books.length ? (
            <div>{`Total: ${convertPrice(
              books.reduce((acc, book) => acc + book.price, 0)
            )}`}</div>
          ) : null}
          {user.firstName ? (
            <div>{`${user.firstName} ${user.lastName}`}</div>
          ) : null}
          {user.addresses ? (
            <div id="addresschoice">
              {user.addresses.map(address => (
                <div>
                  <input
                    id={address.id}
                    key={address.id}
                    type="radio"
                    name="address"
                    value={address}
                  />
                  <label for={address.id}>{address.street}</label>
                </div>
              ))}
            </div>
          ) : <div>test</div>}

          <button type="submit" onClick={() => this.props.checkout(id)}>
            Checkout
          </button>
        </div>
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
                    <h3>{`$${convertPrice(book.price)}`}</h3>
                  </div>
                </div>
              ))
            : null}
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
  checkout: id => dispatch(checkoutCart(id))
});

export default connect(
  mapState,
  mapDispatch
)(Checkout);
