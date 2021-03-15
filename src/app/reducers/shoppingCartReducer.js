const initialState = {
  shoppingCart: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "GET_SHOPPING_CART": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
