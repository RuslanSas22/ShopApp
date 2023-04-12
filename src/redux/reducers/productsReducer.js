import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((index) => index.id !== payload),
      };
    case ActionTypes.ADD_NEW_PRODUCT:
      console.log(payload);
      const res = { ...state, products: [...state.products, payload] };
      console.log(res);
      return res;
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
