import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
const apiUrl = "../../../data.json";
const getUserModules = () =>
   axios
      .get(apiUrl)
      .then((result) => result.data)
      .catch((error) => {
         throw error;
      });
    


function* fetchUserModules() {
  try {
      const usersModules = yield call(getUserModules);
      yield put({ type: 'GET_MODULES_SUCCESS', payload: usersModules });
  } catch (error) {
      yield put({ type: 'MODULES_FAILED', message: error.message });
  }
}

function* userModulesSaga() {
    yield takeEvery('GET_MODULES_REQUESTED', fetchUserModules);
 }

 export { userModulesSaga }