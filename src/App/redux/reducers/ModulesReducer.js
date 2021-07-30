import {
    GET_MODULES_REQUESTED,
    GET_MODULES_SUCCESS,
    MODULES_FAILED,
  } from "../actions/actionTypes";
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  export default function userModulesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MODULES_REQUESTED:
        return { ...state, loading: true };
      case GET_MODULES_SUCCESS:
        return { ...state, loading: false, data: action.payload };
        case MODULES_FAILED:
              return {
                  ...state,
                  error: action.message,
              };        
  
      default:
        return state;
    }
  }