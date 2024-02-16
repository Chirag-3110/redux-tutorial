import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { authtypes } from "../constants/userConstant";
import { getUsersList } from '../../services/getlist';

async function getAllUsers() {
  
}

function* fetchUser() {
    try {
        const users = yield call(getUsersList);
        yield put({ type: authtypes.SET_USERS, users: users.data });
        yield put({ type: authtypes.IS_FETCHING_END });
    } 
    catch (error) {
        yield put({ type: authtypes.IS_ERROR, error: error.data });
        yield put({ type: authtypes.IS_FETCHING_END });
    }
}


function* userSaga() {
  yield takeEvery(authtypes.IS_FETCHING_START, fetchUser);
 }

export default userSaga