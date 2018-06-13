import axios from "axios";

const LOAD_CARTS = "LOAD_CARTS";
const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const ADJUST_QUANTITY = "ADJUST_QUANTITY";
const CHECKOUT = "CHECKOUT";
const CREATE_GUEST_CART = "CREATE_GUEST_CART";

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

const setGuestCart = active => ({
  type: CREATE_GUEST_CART,
  active
});

export const getAllCarts = userId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/cart/${userId}`);
    const active = data.filter(cart => !cart.completed)[0];
    const previous = data.filter(cart => cart.completed);
    dispatch(loadCarts(active, previous));
  };
};

export const getAllGuestCarts = () => {
  return async dispatch => {
    const { data } = await axios.get(`/api/cart/guest`);
    const active = data.filter(cart => !cart.completed);
    const previous = data.filter(cart => cart.completed);
    dispatch(loadCarts(active[0] ? active[0] : {}, previous));
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

export const checkoutCart = cart => {
  return async dispatch => {
    const { data } = await axios.put(`/api/cart/checkout`, cart);
    dispatch(checkout(data.active, data.previous));
  };
};

export const createGuestCart = () => {
  return async dispatch => {
    const { data } = await axios.post("/api/cart/guest");
    dispatch(setGuestCart(data));
  };
};

export const addItemToGuestCart = item => {
  return async dispatch => {
    const { data } = await axios.put(`/api/cart/guest/add`, item);
    dispatch(addToCart(data));
  };
};

export const removeItemFromGuestCart = item => {
  return async dispatch => {
    const { data } = await axios.put(`/api/cart/guest/remove`, item);
    dispatch(removeFromCart(data));
  };
};

export const checkoutGuestCart = (cart, addressId) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/cart/guest/checkout`, {
      cart,
      addressId
    });
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
    case CREATE_GUEST_CART:
      return { ...state, active: action.active };
    default:
      return state;
  }
};

export default cartReducer;
