import {
    REGISTER_USER,
    REGISTER_USER_SUCCESSFUL,
    REGISTER_ERROR,
    RESET_REGISTER_FLAG
  } from "./actionTypes";


export const registerUser = values => {
    return {
      type: REGISTER_USER,
      payload: values
    };
};

export const registerSuccess = user => {
    return {
      type: REGISTER_USER_SUCCESSFUL,
      payload: user,
    };
};

  
export const registerError = error => {
    return {
      type: REGISTER_API_ERROR,
      payload: error,
    };
};

export const resetRegisterFlag = () => {
    return {
      type: RESET_REGISTER_FLAG,
    }
}
