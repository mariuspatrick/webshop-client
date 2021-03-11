const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "USER_REGISTERED": {
      return { ...state, oauth: action.payload }
    }
    case "USER_ERRORS": {
      return { errors: action.payload }
    }
    default: {
      return state;
    }
  }
}
