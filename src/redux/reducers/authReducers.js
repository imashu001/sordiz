import { authentication } from "../actionTypes";

const intitalState = {
  userData: {},
  loggedin: false,
};

export const authReducer = (state = intitalState, action) => {
  const { payload, type } = action
  switch (type) {
    case authentication.LOGIN_SUCCESS:
      return {
        ...state,
        userData: payload,
        loggedin: true,
      };

    case authentication.LOGIN_FAILED:
      alert('Some Error Occured')
      return {
        ...state,
        backenderror: action.payload
      };

    case authentication.LOGOUT: {
      return intitalState;
    }

    default:
      return {
        ...state,
      };
  }
};
