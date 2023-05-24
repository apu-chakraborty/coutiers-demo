import { all, fork } from 'redux-saga/effects';

import LoginSaga from './auth/login/saga'
import RegisterSaga from './auth/register/saga'


function* allSagas() {
    yield all([
        // public
        fork(LoginSaga),
        fork(RegisterSaga),

    ])
}

export default allSagas;
