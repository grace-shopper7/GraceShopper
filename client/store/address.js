import axios from 'axios'
import { bindActionCreators } from 'redux';

// ACTION TYPES
const EDIT_ADDRESS = 'EDIT_ADDRESS'

// INITIAL STATE
const userAddress = {};

//ACTION CREATORS
const changeAddress = address => ({
  type: EDIT_ADDRESS,
  address
})

//THUNK CREATORS


export const editAddress = (id, newAddress) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/addresses/add/${id}`, newAddress)
    dispatch(changeAddress(data))
  }
}


// REDUCER
export default function (state = userAddress, action) {
  switch (action.type) {
    case EDIT_ADDRESS:
      return action.address
    default:
      return state

  }
}
