import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserDetailsPage = (props) => {

return (
  <div>

<div>Hi, {props.user.firstName}</div>





<div className="user-details-container">Your account details</div>
{
  <ul className="user-details">
  <li>Name: {props.user.firstName} {props.user.lastName} </li>
  <li>Email: {props.user.email} </li>
  <li>Street: {props.address.street} </li>
  <li>Zipcode: {props.address.zipcode} </li>
  <li>City: {props.address.city} </li>
  <li>State: {props.address.state} </li>
  <li>Country: {props.address.country} </li>

  </ul>
}

     <Link to="/user/edit/address">
<button>
<div>Edit your address for orders and gifts</div>
</button>
</Link>



<div>Your recent purchases</div>




</div>
)

}



const mapStateToProps = state => ({
  user: state.user,
  address: state.address
})

export default connect(mapStateToProps)(UserDetailsPage)
