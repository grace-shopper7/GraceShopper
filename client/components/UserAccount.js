import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { gotAddress } from "../store/address";
import UserDetails from "./UserDetails";

class UserAccount extends Component {
  render() {
    console.log(this.props.address);

    if (!this.props.user) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {this.props.user.firstName ? (
          <UserDetails address={this.props.address} />
        ) : (
          <div>
            <p>
              Your account does not have a registered address. Please register
              an address
            </p>
            <Link to="/user/add/address">
              <button>register address</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */

const mapDispatchToProps = dispatch => ({
  gotAddress: id => dispatch(gotAddress(id))
});

const mapState = state => {
  return {
    user: state.user,
    address: state.address
  };
};

export default connect(
  mapState,
  mapDispatchToProps
)(UserAccount);
