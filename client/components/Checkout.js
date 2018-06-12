import React from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../store/cart";
import { convertPrice } from "../store/books";
import StripeCheckout from "react-stripe-checkout";
import CheckoutForm from "./CheckoutForm";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      street: "",
      zipcode: "",
      city: "",
      state: "",
      country: "",
      hasempty: true
    };
  }

  static getDerivedStateFromProps = props => {
    let initState = {};
    if (props.user) {
      const { firstName, lastName } = props.user;
      initState = Object.assign(initState, { firstName, lastName });
    }
    if (props.address) initState = Object.assign(initState, props.address);
    return initState;
  };

  handleChange = async event => {
    await this.setState({ [event.target.name]: event.target.value });
    const fields = Object.keys(this.state);
    for (let i = 0; i < fields.length; i++) {
      if (!this.state[fields[i]]) {
        this.setState({ hasempty: true });
        return;
      }
    }
    this.setState({ hasempty: false });
  };

  completePurchase = total => {
    this.props.checkout(this.props.cart.active);
    this.props.history.push("/");
  };

  render() {
    const books = this.props.cart.active ? this.props.cart.active.books : [];
    const total = books
      ? convertPrice(books.reduce((acc, book) => acc + book.price, 0))
      : 0;
    console.log(this.state);
    return (
      <div id="checkout">
        <CheckoutForm handleChange={this.handleChange} state={this.state} />
        <div>
          {books && books.length ? <div>{`Total: ${total}`}</div> : null}
          <StripeCheckout
            name="Checkout"
            description="Confirm purchase"
            amount={Number(total) * 100}
            token={() =>
              this.completePurchase(Number(total) * 100, "Confirm purchase")
            }
            currency="USD"
            stripeKey="pk_test_jhZvySSyMa2oxufj7N2knzrs"
            disabled={this.state.hasempty}
          />
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
  cart: state.cart,
  address: state.address
});

const mapDispatch = dispatch => ({
  checkout: cart => dispatch(checkoutCart(cart))
});

export default connect(
  mapState,
  mapDispatch
)(Checkout);
