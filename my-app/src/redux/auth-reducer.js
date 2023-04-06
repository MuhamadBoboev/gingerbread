import { authApi } from "../api/api";

const AUTH_ME = "AUTH_ME";
const AYTH_PROGRESS = "AYTH_PROGRESS";
const TOKEN = "TOKEN";
const initialState = {
  login: "",
  password: "",
  token: "",
  isProgress: false,
  isAuth: localStorage.getItem("isAuth"),
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ME: {
      // debugger;
      localStorage.setItem("login", action.login);
      localStorage.setItem("password", action.password);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", action.token);
      // debugger;
      return {
        ...state,
        login: action.login,
        isAuth: true,
        password: action.password,
        token: action.token,
      };
    }

    case AYTH_PROGRESS: {
      if (state.isProgress == true) {
        return { ...state, isProgress: false };
      } else {
        return { ...state, isProgress: true };
      }
    }

    default:
      return state;
  }
};
export const setAuthMe = (login, password, token) => ({
  type: AUTH_ME,
  login,
  password,
  token,
});
export const tokenAC = (token) => ({ type: TOKEN, token });

export const setProgress = (boolean) => ({ type: AYTH_PROGRESS, boolean });
export const authMe =
  (
    login = localStorage.getItem("login"),
    password = localStorage.getItem("password")
  ) =>
  (dispatch) => {
    dispatch(setProgress(true));
    authApi.authMeApi(login, password).then((response) => {
      // debugger;
      if (response.data.error_code == 0) {
        // debugger;

        dispatch(setAuthMe(login, password, response.data.data.token));

        // debugger;
      }
      dispatch(setProgress(true));
    });
  };
export default authReducer;
