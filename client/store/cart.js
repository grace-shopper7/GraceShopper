import axios from "axios";

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
  active,
  previous
});

const addToCart = active => ({
  type: ADD_ITEM_TO_CART,
  active
});

const removeFromCart = active => ({
  type: REMOVE_ITEM_FROM_CART,
  active
});

const checkout = (active, previous) => ({
  type: CHECKOUT,
  active,
  previous
});

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
    dispatch(addToCart(data));
  };
};

export const removeItemFromCart = (item, userId) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/cart/remove/${userId}`, item);
    dispatch(removeFromCart(data));
  };
};

export const checkoutCart = userId => {
  return async dispatch => {
    console.log(userId)
    const { data } = await axios.put(`/api/cart/checkout/${userId}`);
    dispatch(checkout(data.active, data.previous));
  };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARTS:
      return {
        ...state,
        active: action.active,
        previous: action.previous
      };
    case ADD_ITEM_TO_CART:
      return { ...state, active: action.active };
    case REMOVE_ITEM_FROM_CART:
      return { ...state, active: action.active };
    case CHECKOUT:
      return {
        ...state,
        active: action.active,
        previous: action.previous
      };
    default:
      return state;
  }
};

export default cartReducer;
