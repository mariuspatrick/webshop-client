import api from "api";

export const GET_PRODUCTS = "GET_PRODUCTS";

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const loadProducts = () => async (dispatch, getState) => {
  if (getState().products) return;

  try {
    const res = await api("/products", "get");
    dispatch(getProducts(res.data));
  } catch (err) {
    console.error(err);
  }
};
