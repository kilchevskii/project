import { combineReducers } from 'redux';
import authReducer from './authReducer';
import modulesReducer from './ModulesReducer';

const rootReducer = combineReducers({
   auth: authReducer,
   modules: modulesReducer
});

export default rootReducer;
