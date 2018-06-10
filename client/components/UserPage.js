import React, { Component } from "react";
import { connect } from "react-redux";
import { gotAddress } from "../store/address"
import UserDetailsForm from "./UserDetailsForm.js"




class UserPage extends Component {


  render() {

    if (!this.props.address) {
      return <div>Loading...</div>
    }

    return (
      <div>
      {

      // (this.props.address && this.props.user.lastName)
      // ? <UserDetails />
      // :
       <UserDetailsForm user={this.props.user} />


      }
      </div>
    );
  }
}

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    user: state.user,
    address: state.address

  };


};

const mapDispatch = dispatch => ({
  gotAddress: (id) => dispatch(gotAddress(id)),
})

export default connect(
  mapState,
  mapDispatch
)(UserPage);


