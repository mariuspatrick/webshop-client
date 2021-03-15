import api from "api";

export const GET_SHOPPING_CART = "GET_SHOPPING_CART";

const getProducts = (cart) => ({
  type: GET_SHOPPING_CART,
  payload: cart,
});

export const loadShoppingCart = () => async (dispatch, getState) => {
  // if (!getState().users.user.token) return;

  try {
    // console.log("state in shoppingcart: ", getState());
    const token = await getState().users.user.token;

    const res = await api("/get-products", "get", {}, token);

    // const res = await api(`/products-to-cart/${data.id}`, "get", {}, token);
    console.log("response in shoppingCArt: ", res);

    dispatch(getProducts(res));
  } catch (error) {
    console.error(error);
  }
};

// export const addToCart = () => async (dispatch, getState) {

// }
