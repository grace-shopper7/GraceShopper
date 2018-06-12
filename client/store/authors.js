import axios from 'axios'
import history from '../history'

// ACTION TYPES
const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS'
const ADD_AUTHOR = 'ADD_AUTHOR'

// INITIAL STATE
const allAuthors = [];

//ACTION CREATORS
const getAuthors = authors => ({
  type: GET_ALL_AUTHORS,
  authors
})

const addAuthor = author => ({
  type: ADD_AUTHOR,
  author
})

//THUNK CREATORS
export const gotAuthors = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/authors')
    dispatch(getAuthors(data))
  }
}

export const addNewAuthor = author => {
  return async dispatch => {
    const {data} = await axios.post("/api/authors", author)
    dispatch(addAuthor(data))
    return data.id
  }
}

// REDUCER
export default function (state = allAuthors, action) {
  switch (action.type) {
    case GET_ALL_AUTHORS:
      return action.authors
    case ADD_AUTHOR:
      return state.concat(action.author)
    default:
      return state

  }
}
