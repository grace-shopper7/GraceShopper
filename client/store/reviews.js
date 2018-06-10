import axios from 'axios'
import history from '../history'

// ACTION TYPES
const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
const GET_ALL_USER_REVIEWS = 'GET_ALL_USER_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'

// INITIAL STATE
const allReviews = [];

//ACTION CREATORS
const getAllReviews = reviews => ({
  type: GET_ALL_REVIEWS,
  reviews
})

const getUserReviews = reviews => ({
  type: GET_ALL_USER_REVIEWS,
  reviews
})

const addReview = review => ({
  type: ADD_REVIEW,
  review
})

//THUNK CREATORS
export const gotReviews = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/reviews')
    dispatch(getAllReviews(data))
  }
}

export const gotUserReviews = (user) => {
  return async dispatch => {
    const { data } = await axios.get('/api/reviews')
    let userReviews = data.filter((review) => {
      if (review.userId === user){
        return (review)
      }
    })
    dispatch(getUserReviews(userReviews))
  }
}

export const addedReview = (formData) => {
  return async dispatch => {
    const { data } = await axios.post('/api/reviews', formData)
    dispatch(addReview(data))
  }
}

// REDUCER
export default function (state = allReviews, action) {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return action.reviews
    case GET_ALL_USER_REVIEWS:
      return action.reviews
    case ADD_REVIEW:
      return [...state, action.review]
    default:
      return state
  }
}
