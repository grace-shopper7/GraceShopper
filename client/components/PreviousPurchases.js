import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { convertPrice } from "../store/books";


class PreviousPurchases extends React.Component {
  render() {
    const carts = this.props.cart.previous ? this.props.cart.previous : [];
    return (
      <div id="previouspurchases">
        {carts.length ? (
          carts.map(cart => (
            <div key={cart.id} className="previouspurchase">
              <h5>{`Purchased on ${cart.updatedAt.slice(0, 10)}`}</h5>
              {cart.books
                ? cart.books.map(book => (
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
                    </div>
                  ))
                : null}
            </div>
          ))
        ) : (
          <div className='no-purchases'>You have not made any purchases...</div>

        )}
      </div>
    );
  }
}

const mapState = state => ({
  cart: state.cart
});

export default connect(mapState)(PreviousPurchases);
