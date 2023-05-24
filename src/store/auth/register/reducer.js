import {
    REGISTER_USER,
    REGISTER_USER_SUCCESSFUL,
    REGISTER_ERROR,
    RESET_REGISTER_FLAG
  } from "./actionTypes";
  

const initialState = {
    user: null,
    errorMsg: null,
    loading: false,
};


const register = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER:
        state = {
          user: null,
          loading: true,
          errorMsg: null,
        };
        break;
      case REGISTER_USER_SUCCESSFUL:
        state = {
          user: action.payload,
          loading: false,
          error: null,
        };
        break;
      case REGISTER_ERROR:
        state = {
          user: null,
          loading: true,
          errorMsg: action.payload,
        };
        break;
      case RESET_REGISTER_FLAG:
        state = {
          user: null,
          loading: false,
          errorMsg: null
        };
        break;
      default:
        state = { ...state };
        break;
    }
    return state;
};
  
export default register;
