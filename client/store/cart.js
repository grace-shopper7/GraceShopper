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
  previous,
  active
});

export const getAllCarts = id => {
  return async dispatch => {
    const { data } = await axios.get(`/api/cart/${id}`);
    console.log(data)
    const active = data.filter(cart => !cart.completed)[0];
    const previous = data.filter(cart => cart.completed);
    dispatch(loadCarts(active, previous));
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
    default:
      return state;
  }
};

export default cartReducer;
