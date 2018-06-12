import React, { Component } from "react";
import { connect } from "react-redux";
import { editAddress } from "../store/address";
import { edittedUser } from "../store/user";
import UserDetailsEditForm from './UserDetailsEditForm'


class EditUserDetails extends Component {
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
      <div className="address-input-text"> Edit your name and address below:
      <UserDetailsEditForm state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.address,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  editAddress: (id, newAddress) => dispatch(editAddress(id, newAddress)),
  editUser: (id, newUser) => dispatch(edittedUser(id, newUser))
  })


export default connect(mapStateToProps, mapDispatchToProps)(EditUserDetails);



