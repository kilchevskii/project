import {
    GET_MODULES_REQUESTED
  } from './actionTypes';
  
  
  export const getUserModules = (data) => {
   return {
       type: GET_MODULES_REQUESTED,
       payload: data,
   };
  };