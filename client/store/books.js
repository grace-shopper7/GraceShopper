import axios from 'axios'
import history from '../history'

// ACTION TYPES
const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
const ADD_REVIEW = 'ADD_REVIEW'

// INITIAL STATE
const allBooks = [];

//ACTION CREATORS
const getBooks = books => ({
  type: GET_ALL_BOOKS,
  books
})

export const convertPrice = (price) => {
  return parseFloat(Math.round(price * 100) / 100).toFixed(2);
}

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
      return action.books
    case ADD_REVIEW:
    let bookId = parseInt(action.bookId)
    return state.map((book) => {
      if (book.id === bookId){
        book.reviews.push(action.review)
        return book
      } else {
        return book
      }
    })
    default:
      return state
  }
}
