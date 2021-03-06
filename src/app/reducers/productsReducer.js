const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_PRODUCTS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}