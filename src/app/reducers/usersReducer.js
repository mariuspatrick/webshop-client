const initialState = {
  token: null,
  user: {},
  errors: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "USER_REGISTERED": {
      return { ...state, token: action.payload };
    }
    case "USER_LOGGED_IN": {
      return { ...state, user: action.payload };
    }
    case "LOG_OUT": {
      localStorage.setItem("token", "");
      return {
        token: null,
        user: {},
      };
    }
    case "USER_ERRORS": {
      return { ...state, errors: action.payload };
    }
    default: {
      return state;
    }
  }
}
