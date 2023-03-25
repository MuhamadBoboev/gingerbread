import { authApi } from "../api/api";

const AUTH_ME = "AUTH_ME";
const AYTH_PROGRESS = "AYTH_PROGRESS";

const initialState = {
  name: "",
  password: "",
  token: "",
  isProgress: false,
  isAuth: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ME: {
      let a = action.password;
      // debugger;
      return {
        ...state,
        name: action.name,
        password: action.password,
        // token: action.token,
      };
    }
    case AYTH_PROGRESS: {
      if (state.isProgress == true) {
        console.log("true");
        return { ...state, isProgress: false };
      } else {
        console.log("false");
        return { ...state, isProgress: true };
      }
    }

    default:
      return state;
  }
};
export const setAuthMe = (name, password) => {
  return {
    type: AUTH_ME,
    name,
    password,
    // token,
  };
};
export const setProgress = (boolean) => ({ type: AYTH_PROGRESS, boolean });
export const authMe = (name, password) => {
  return (dispatch) => {
    dispatch(setProgress(true));
    authApi.getUsers(name, password).then((response) => {
      dispatch(setAuthMe(name, password));
      dispatch(setProgress(true));
    });
  };
};
export default authReducer;
