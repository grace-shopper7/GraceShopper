import React from "react";

const CheckoutForm = props => {
  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        onChange={props.handleChange}
        value={props.state.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        onChange={props.handleChange}
        value={props.state.lastName}
      />

      <label htmlFor="street">Street</label>
      <input
        type="text"
        name="street"
        onChange={props.handleChange}
        value={props.state.street}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        onChange={props.handleChange}
        value={props.state.city}
      />

      <label htmlFor="zipcode">zipcode</label>
      <input
        type="text"
        name="zipcode"
        onChange={props.handleChange}
        value={props.state.zipcode}
      />

      <label htmlFor="state">State</label>
      <input
        type="text"
        name="state"
        onChange={props.handleChange}
        value={props.state.state}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        name="country"
        onChange={props.handleChange}
        value={props.state.country}
      />
    </form>
  );
};

export default CheckoutForm;
