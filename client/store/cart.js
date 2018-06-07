import axios from "axios";
import store from './index'

const LOAD_CARTS = "LOAD_CARTS";
const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const ADJUST_QUANTITY = "ADJUST_QUANTITY";
const CHECKOUT = "CHECKOUT";

const initialState = {
  active: {},
  previous: []
};

const loadCarts = (active, previous) => ({
  type: LOAD_CARTS,
  previous,
  active
});

const addToCart = active => ({
  type: ADD_ITEM_TO_CART,
  active
})

const removeFromCart = active => ({
  type: REMOVE_ITEM_FROM_CART,
  active
})

export const initializeCarts = async userId => {
  const { data } = await axios.get(`/api/cart/${userId}`);
  const active = data.filter(cart => !cart.completed)[0];
  const previous = data.filter(cart => cart.completed);
  store.dispatch(loadCarts(active, previous));
}

export const getAllCarts = userId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/cart/${userId}`);
    const active = data.filter(cart => !cart.completed)[0];
    const previous = data.filter(cart => cart.completed);
    dispatch(loadCarts(active, previous));
  };
};

export const addItemToCart = (item, userId) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/cart/add/${userId}`, item);
    dispatch(addToCart(data))
  }
}

export const removeItemFromCart = (item, userId) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/cart/remove/${userId}`, item);
    dispatch(removeFromCart(data))
  }
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARTS:
      return {
        ...state,
        active: action.active,
        previous: action.previous
      };
    case ADD_ITEM_TO_CART:
      return {...state, active: action.active}
    case REMOVE_ITEM_FROM_CART:
      return {...state, active: action.active}
    default:
      return state;
  }
};

export default cartReducer;
