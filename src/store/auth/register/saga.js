import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { REGISTER_USER } from "./actionTypes";
import { registerError, registerSuccess } from "./actions";


function fakeRegister(payload) {
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


function* registerUser({ payload }) {
    try {
        const resp = yield call(fakeRegister, payload)
        const { success, user_id, authToken } = resp.data
        if(success) {
            yield put(registerSuccess({ user_id, authToken }))
        }
    } catch (error) {
        console.error(error)
        yield put(registerError("Unable to Connect to Server!"));
    }
}


function* authSaga() {
    yield takeEvery(REGISTER_USER, registerUser);
}


export default authSaga;
