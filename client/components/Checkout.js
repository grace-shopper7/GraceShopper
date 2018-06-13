import React from "react";
import { connect } from "react-redux";
import { checkoutCart, checkoutGuestCart } from "../store/cart";
import { convertPrice } from "../store/books";
import { editAddress, createGuestAddress } from "../store/address";
import { edittedUser } from "../store/user";
import { Link } from "react-router-dom";
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
    initState.hasempty = false;
    const fields = [
      "firstName",
      "lastName",
      "street",
      "zipcode",
      "city",
      "state",
      "country"
    ];
    for (let i = 0; i < fields.length; i++) {
      if (!initState[fields[i]]) initState.hasempty = true;
    }
    return initState;
  };

  handleChange = async event => {
    await this.setState({ [event.target.name]: event.target.value });
    const fields = [
      "firstName",
      "lastName",
      "street",
      "zipcode",
      "city",
      "state",
      "country"
    ];
    for (let i = 0; i < fields.length; i++) {
      if (!this.state[fields[i]]) {
        this.setState({ hasempty: true });
        return;
      }
    }
    this.setState({ hasempty: false });
  };

  completePurchase = async total => {
    if (this.props.user.id) {
      this.props.editUser(this.props.user.id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      });
      this.props.editAddress(this.props.user.id, {
        street: this.state.street,
        zipcode: this.state.zipcode,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country
      });
      this.props.checkout(this.props.cart.active);
    } else {
      const addressId = await this.props.createGuestAddress({
        street: this.state.street,
        zipcode: this.state.zipcode,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country
      })
      this.props.checkoutGuestCart(this.props.cart.active, addressId);
    }
    this.props.history.push("/");
  };

  render() {
    const books = this.props.cart.active ? this.props.cart.active.books : [];
    const total = books
      ? convertPrice(books.reduce((acc, book) => acc + book.price, 0))
      : 0;
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
        <div id="cartitems">
          {books
            ? books.map(book => (
                <div className="cartitem" key={book.id}>
                  <Link to={`books/${book.id}`}>
                    <img src={book.imageUrl} />
                  </Link>
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
  checkout: cart => dispatch(checkoutCart(cart)),
  checkoutGuestCart: (cart, addressId) =>
    dispatch(checkoutGuestCart(cart, addressId)),
  editUser: (id, user) => dispatch(edittedUser(id, user)),
  editAddress: (id, address) => dispatch(editAddress(id, address)),
  createGuestAddress: address => dispatch(createGuestAddress(address))
});

export default connect(
  mapState,
  mapDispatch
)(Checkout);
