import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {gotAddress} from '../store/address'
import UserDetailsPage from './UserDetailsPage'




class UserAccount extends Component {
  componentDidMount() {
    if (this.props.address) {
    const id = +this.props.match.params.userId
    this.props.gotAddress(id)
    }
  }


  render() {


    if (!this.props.user) {
      return <div>Loading...</div>
    }

    return (
      <div>
      {

      (this.props.address && this.props.user.lastName)
      ? <UserDetailsPage />
      :
        <div>
       <p>Your account does not have a registered address. Please register an address</p>
       <Link to="/useraddress">
       <button>register address</button>
       </Link>

        </div>

      }
      </div>
    );
  }
}

/**
 * CONTAINER
 */

const mapDispatchToProps = (dispatch) => ({
  gotAddress: (id) => dispatch(gotAddress(id)),
  })

const mapState = state => {
  return {
    user: state.user,
    address: state.address

  };


};


export default connect(
  mapState, mapDispatchToProps
)(UserAccount);


