import * as actionTypes from "./actionTypes";
import _DefaultRoutes from '../../config/DefaultRoutes'
import axios from 'axios'

export const setProducts = (response) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_ALL,
    response: response
  };
};

export const fetchAllProducts = (limit, offset, keyword) => {
  return dispatch => {
    axios
      .post(_DefaultRoutes.PRODUCT.GET_ALL,{
        limit: limit,
        offset: offset,
        keyword: keyword
      })
      .then(response => {
        dispatch(setProducts(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
