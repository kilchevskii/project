import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const apiUrl = 'https://typ-back.herokuapp.com/api/auth/login';

const postLogin = async (data) => {
   return await axios.post(apiUrl, data);
};

function* fetchLogin(action) {
   try {
      const userInfo = yield call(() => postLogin(action.payload.data));
      localStorage.setItem('token', userInfo.data.token);
      localStorage.setItem(
         'userRole',
         userInfo.data.isAdmin ? 'admin' : 'user'
      );
      yield put({ type: 'GET_LOGIN_SUCCESS', payload: userInfo });
      action.payload.history.push('/');
   } catch (error) {}
}

function* authLoginSaga() {
   yield takeEvery('GET_LOGIN_REQUESTED', fetchLogin);
}

export { authLoginSaga };