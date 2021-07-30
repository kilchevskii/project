import { GET_LOGIN_REQUESTED, GET_LOGIN_SUCCESS } from '../actions/actionTypes';

const initialState = {
   loading: false,
};

export default function authReducer(state = initialState, action) {
   switch (action.type) {
      case GET_LOGIN_REQUESTED:
         return { ...state, loading: true };
      case GET_LOGIN_SUCCESS:
         const { token, isAdmin } = action.payload.data;
         return {
            ...state,
            loading: false,
            token,
            role: isAdmin ? 'admin' : 'user',
         };
      default:
         return state;
   }
}
