import axios from 'axios'
import { bindActionCreators } from 'redux';
import history from '../history'


// ACTION TYPES
const GET_USER_ADDRESS = 'GET_USER_ADDRESS'

// INITIAL STATE
const userAddress = {};

//ACTION CREATORS
const getAddress = address => ({
  type: GET_USER_ADDRESS,
  address
})


//THUNK CREATORS
export const gotAddress = (id) => {
  return async dispatch => {
    const { data } = await axios.get(`/api/addresses/${id}`)
    dispatch(getAddress(data))
  }
}

export const addAddress = (id, newAddress) => {
  return async dispatch => {
    const { data } = await axios.post(`/api/addresses/add/${id}`, newAddress)
    dispatch(getAddress(data))
    history.push(`/user/`)
  }
}


export const editAddress = (id, newAddress) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/addresses/edit/${id}`, newAddress)
    dispatch(getAddress(data))
    history.push(`/user`)
  }
}


// REDUCER
export default function (state = userAddress, action) {
  switch (action.type) {
    case GET_USER_ADDRESS:
      return action.address
    default:
      return state

  }
}
