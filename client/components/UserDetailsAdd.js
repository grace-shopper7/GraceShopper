import React, { Component } from "react";
import { connect } from "react-redux";
import { addAddress } from "../store/address";
import { edittedUser } from "../store/user";
import UserDetailsAddForm from "./UserDetailsAddForm";

class UserDetailsAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      zipcode: "",
      city: "",
      state: "",
      country: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props) {
    const { email } = props.user;
    return {
      email
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addAddress(this.props.user.id, {
      street: this.state.street,
      city: this.state.city,
      zipcode: this.state.zipcode,
      state: this.state.state,
      country: this.state.country
    });
    this.props.editUser(this.props.user.id, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    });

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
      <UserDetailsAddForm
        state={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  address: state.address,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addAddress: (id, newAddress) => dispatch(addAddress(id, newAddress)),
  editUser: (id, newUser) => dispatch(edittedUser(id, newUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsAdd);
