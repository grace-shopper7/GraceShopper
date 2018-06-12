import React from "react";

const UserDetailsAddForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="address-add-form">
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

      <label htmlFor="email">email</label>
      <input
        type="text"
        name="email"
        onChange={props.handleChange}
        value={props.state.email}
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
        value={props.state.county}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        name="country"
        onChange={props.handleChange}
        value={props.state.county}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default UserDetailsAddForm;
