import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { loginError, loginSuccess, logoutUserSuccess } from "./actions";


function fakeLogin(payload) {
    const { email, password } = payload
    console.log("logging in with: ", email, password)
    const response = {
        data: {
            success: true,
            user_id: 420,
            authToken: "fehufuhdiljejnejfejfk"
        }
    }
    return new Promise((resolve, _) =>
        setTimeout(() => resolve(response), 3000))
}

function fakeLogout() {
    const response = {
        data: {
            success: true
        }
    }
    return new Promise((resolve, _) =>
        setTimeout(() => resolve(response), 3000))
}



function* loginUser({ payload }) {
    try {
        const resp = yield call(fakeLogin, payload)
        const { success, user_id, authToken } = resp.data
        if(success) {
            yield put(loginSuccess({ user_id, authToken }))
        }
    } catch (error) {
        console.error(error)
        yield put(loginError("Unable to Connect to Server!"));
    }
}


function* logoutUser() {
    try {
        const resp = yield call(fakeLogout)
        const data = resp.data
        if(data.success) {
            yield put(logoutUserSuccess({ user_id, authToken }))
        }
    } catch (error) {
        console.error(error)
        yield put(apiError("Unable to Connect to Server!"));
    }
}

// function* socialLogin({ payload: { data, history, type } }) {
//   try {
//     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//       const fireBaseBackend = getFirebaseBackend();
//       const response = yield call(
//         fireBaseBackend.socialLoginUser,
//         data,
//         type,
//       );
//       sessionStorage.setItem("authUser", JSON.stringify(response));
//       yield put(loginSuccess(response));
//     } else {
//       const response = yield call(postSocialLogin, data);
//       sessionStorage.setItem("authUser", JSON.stringify(response));
//       yield put(loginSuccess(response));
//     }
//     history('/dashboard');
//   } catch (error) {
//     yield put(apiError(error));
//   }
// }


function* authSaga() {
    yield takeEvery(LOGIN_USER, loginUser);
    // yield takeLatest(SOCIAL_LOGIN, socialLogin);
    yield takeEvery(LOGOUT_USER, logoutUser);
}


export default authSaga;
