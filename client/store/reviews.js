import axios from 'axios'
import history from '../history'

// ACTION TYPES
const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
const GET_ALL_USER_REVIEWS = 'GET_ALL_USER_REVIEWS'

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

// REDUCER
export default function (state = allReviews, action) {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return action.reviews
    case GET_ALL_USER_REVIEWS:
      return action.reviews
    default:
      return state
  }
}
