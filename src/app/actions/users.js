import api from "api";

export const REGISTER_USER = "USER_REGISTERED";
export const LOGIN_USER = "USER_LOGGED_IN";
export const USER_ERRORS = "USER_ERRORS";
export const USER_LOGGED_OUT = "LOG_OUT";

const registerUser = (token) => ({
  type: REGISTER_USER,
  payload: token,
});
const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});
export const logout = () => ({
  type: USER_LOGGED_OUT,
});
export const userErrors = (errors) => ({
  type: USER_ERRORS,
  payload: errors,
});

export function register(name, email, password, passwordConfirmation) {
  return async function thunk(dispatch, getState) {
    try {
      const res = await api("/users", "post", {
        email: email,
        name: name,
        password: password,
        password_confirmation: passwordConfirmation,
      });
      if (!res.token) return dispatch(userErrors(res.data.errors));

      dispatch(registerUser(res));
    } catch (error) {
      console.error(error);
    }
  };
}

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      const res = await api("/login", "post", {
        email: email,
        password: password,
      });
      if (!res.token) return dispatch(userErrors(res.data));

      localStorage.setItem("token", res.token);

      dispatch(loginUser(res));
    } catch (error) {
      console.error(error);
    }
  };
}
