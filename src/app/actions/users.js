import api from "api";

export const REGISTER_USER = "USER_REGISTERED";
export const USER_ERRORS = "USER_ERRORS";

const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});
const userErrors = (errors) => ({
  type: USER_ERRORS,
  payload: errors,
});

// function retrieveError(errorResponse) {
//   for (const [key, value] of Object.entries(errorResponse)) {
//     console.log(`${key} and ${value}`);
//   }
// }

export function register(name, email, password, passwordConfirmation) {
  return async function thunk(dispatch, getState) {
    try {
      const res = await api("/users", "post", {
        email: email,
        name: name,
        password: password,
        password_confirmation: passwordConfirmation,
      });
      if (res.data.errors) return dispatch(userErrors(res.data.errors));

      console.log("state here: ", getState());
      dispatch(registerUser(res));
    } catch (err) {
      console.error(err);
    }
  };
}
