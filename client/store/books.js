import axios from 'axios'
import history from '../history'

// ACTION TYPES
const GET_ALL_BOOKS = 'GET_ALL_BOOKS'

// INITIAL STATE
const allBooks = [];

//ACTION CREATORS
const getBooks = books => ({
  type: GET_ALL_BOOKS,
  books
})

//THUNK CREATORS
export const gotBooks = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/books')
    dispatch(getBooks(data))
  }
}

// REDUCER
export default function (state = allBooks, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return action.type
    default:
      return state
  }
}