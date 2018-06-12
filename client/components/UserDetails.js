import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UserDetails = props => {
  console.log(props);

  return (
    <div>
      <div>Hi, {props.user.firstName}</div>

<<<<<<< HEAD
      <div className="user-details-container">Your account details</div>
      {
=======
      <div className="user-details-container">Your account details:</div>
      {
        <div>
>>>>>>> 4bdcb3fadc940238b801703d307e22196dafc492
        <ul className="user-details">
          <li>
            Name: {props.user.firstName} {props.user.lastName}{" "}
          </li>
          <li>Email: {props.user.email} </li>
          <li>Street: {props.address.street} </li>
          <li>Zipcode: {props.address.zipcode} </li>
          <li>City: {props.address.city} </li>
          <li>State: {props.address.state} </li>
          <li>Country: {props.address.country} </li>
        </ul>
<<<<<<< HEAD
      }

      <Link to="/user/edit/address">
=======
        </div>
      }

      <Link to="/user/edit/address" className="edit-address">
>>>>>>> 4bdcb3fadc940238b801703d307e22196dafc492
        <button>
          <div>Edit your address for orders and gifts</div>
        </button>
      </Link>
<<<<<<< HEAD

      <div>Your recent purchases</div>
=======
      <div className="user-purchase"> View your recent purchases</div>
      <Link to="/history" className="purchase-history-link">
        <button className="purchase-history-btn"> See purchases
        </button>
      </Link>

>>>>>>> 4bdcb3fadc940238b801703d307e22196dafc492
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  address: state.address
});

export default connect(mapStateToProps)(UserDetails);
