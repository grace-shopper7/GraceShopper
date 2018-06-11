import React from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../store/cart";
import { convertPrice } from "../store/books";
import StripeCheckout from "react-stripe-checkout";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  completePurchase = total => {
    console.log('test')
    this.props.checkout(this.props.cart.active)
    history.push('/')
  };

  render() {
    const books = this.props.cart.active ? this.props.cart.active.books : [];
    const id = this.props.user.id;
    const user = this.props.user;
    const total = books
      ? convertPrice(books.reduce((acc, book) => acc + book.price, 0))
      : 0;
    return (
      <div id="checkout">
        <div>
          {books && books.length ? <div>{`Total: ${total}`}</div> : null}
          {user.firstName ? (
            <div>{`${user.firstName} ${user.lastName}`}</div>
          ) : null}
          {user.addresses ? (
            <div id="addresschoice">
              {user.addresses.map(address => (
                <div key={address.id}>
                  <input
                    id={address.id}
                    type="radio"
                    name="address"
                    value={address}
                  />
                  <label for={address.id}>{address.street}</label>
                </div>
              ))}
            </div>
          ) : (
            <div>test</div>
          )}

          <StripeCheckout
            name="Checkout"
            description="Confirm purchase"
            amount={Number(total) * 100}
            token={() => this.completePurchase(Number(total) * 100, "Confirm purchase")}
            currency="USD"
            stripeKey="pk_test_jhZvySSyMa2oxufj7N2knzrs"
          />

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
  checkout: cart => dispatch(checkoutCart(cart))
});

export default connect(
  mapState,
  mapDispatch
)(Checkout);
