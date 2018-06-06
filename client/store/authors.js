import axios from 'axios'
import history from '../history'

// ACTION TYPES
const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS'

// INITIAL STATE
const allAuthors = [];

//ACTION CREATORS
const getAuthors = authors => ({
  type: GET_ALL_AUTHORS,
  authors
})

//THUNK CREATORS
export const gotAuthors = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/authors')
    dispatch(getAuthors(data))
  }
}

// REDUCER
export default function (state = allAuthors, action) {
  switch (action.type) {
    case GET_ALL_AUTHORS:
      return action.authors
    default:
      return state

  }
}
