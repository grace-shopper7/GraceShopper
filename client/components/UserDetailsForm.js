import React, { Component } from "react";
import { connect } from "react-redux";
import { editAddress } from "../store/address";
import { edittedUser } from "../store/user";


class UserDetailsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        email:  '',
        street: '',
        zipcode: '',
        city: '',
        state: '',
        country: '',

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  static getDerivedStateFromProps(props) {
    const {firstName, lastName, email} = props.user



    if (props.address) {
      const { street, city, zipcode, state, country} = props.address

      return {
        firstName,
        lastName,
        email,
        street,
        zipcode,
        city,
        state,
        country
      }
    } else {
      return {
      firstName,
        lastName,
        email
      }
    }
  }




  handleSubmit(event) {
    event.preventDefault();
    this.props.editAddress(this.props.user.id, { street: this.state.street, city: this.state.city, zipcode: this.state.zipcode, state: this.state.state, country: this.state.country});
    this.props.editUser(this.props.user.id, {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email})

    this.setState({
      [event.target.name]: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={this.handleChange}
          value={this.state.lastName}
        />

        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />

       <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          onChange={this.handleChange}
          value={this.state.street}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          onChange={this.handleChange}
          value={this.state.city}
        />

        <label htmlFor="zipcode">zipcode</label>
        <input
          type="text"
          name="zipcode"
          onChange={this.handleChange}
          value={this.state.zipcode}
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          onChange={this.handleChange}
          value={this.state.county}
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          onChange={this.handleChange}
          value={this.state.county}
        />


        <button type="submit">Save Changes</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  editAddress: (id, newAddress) => dispatch(editAddress(id, newAddress)),
  editUser: (id, newUser) => dispatch(edittedUser(id, newUser))
  })


export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsForm);



