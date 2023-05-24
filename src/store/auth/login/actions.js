import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGIN_ERROR,
    RESET_LOGIN_FLAG
  } from "./actionTypes";


export const loginUser = values => {
    return {
      type: LOGIN_USER,
      payload: values
    };
};

export const loginSuccess = user => {
    return {
      type: LOGIN_SUCCESS,
      payload: user,
    };
};

export const logoutUser = () => {
    return {
      type: LOGOUT_USER
    };
};
  
export const logoutUserSuccess = () => {
    return {
      type: LOGOUT_USER_SUCCESS,
      payload: {},
    };
};
  
export const loginError = error => {
    return {
      type: LOGIN_ERROR,
      payload: error,
    };
};

export const logoutError = error => {
    return {
      type: LOGOUT_ERROR,
      payload: error
    }
}

// export const socialLogin = (data, history, type) => {
//     return {
//       type: SOCIAL_LOGIN,
//       payload: { data, history, type },
//     };
// };

export const resetLoginFlag = () => {
    return {
      type: RESET_LOGIN_FLAG,
    }
}
