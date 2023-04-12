import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const DeleteProduct = (id) => {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id,
  };
};
export const EditProduct = () => {
  return {
    type: ActionTypes.EDIT_PRODUCT,
  };
};

export const AddProduct = (obj) => {
  console.log(obj);
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: obj,
  };
};
