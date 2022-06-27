import { authentication } from "../actionTypes";


export const loginInit = (data) => {
  return {
    type: authentication.LOGIN_INIT,
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: authentication.LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailed = (data) => {
  return {
    type: authentication.LOGIN_FAILED,
    payload: data,
  };
};

export const signUpInit = (data) => {
  return {
    type: authentication.SIGNUP_INIT,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: authentication.LOGOUT,
  };
};
