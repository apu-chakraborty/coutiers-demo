import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    
    RESET_LOGIN_FLAG,
    LOGIN_ERROR, LOGOUT_ERROR
  } from "./actionTypes";
  

const initialState = {
    user: null,
    errorMsg: null,
    loading: false,
};

const login = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        state = {
          user: null,
          loading: true,
          errorMsg: null,
        };
        break;
      case LOGIN_SUCCESS:
        state = {
          user: action.payload,
          loading: false,
          error: null,
        };
        break;
      case LOGOUT_USER:
        state = {
          ...state,
          loading: true,
          errorMsg: null
        };
        break;
      case LOGOUT_USER_SUCCESS:
        state = {
          user: null,
          loading: false,
          errorMsg: null
        };
        break;
      case LOGIN_ERROR: case LOGOUT_ERROR:
        state = {
          user: null,
          loading: true,
          errorMsg: action.payload,
        };
        break;
      case RESET_LOGIN_FLAG:
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

export default login;
