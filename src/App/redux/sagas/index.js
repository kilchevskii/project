import { all } from 'redux-saga/effects';
import { authLoginSaga } from './authSaga';
import { userModulesSaga } from './modulesSaga';


export default function* rootSaga() {

   yield all([
      authLoginSaga(),
      userModulesSaga(),
   ]);

}