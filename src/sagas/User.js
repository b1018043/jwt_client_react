import {call,put,fork,join,takeEvery} from 'redux-saga/effects';
import {sendLoginRequest,sendSignUpRequest} from "../apis/User";
import {loginRequest,loginSuccess,loginFailed,signUpRequest,signUpSuccess,signUpFailed,SIGNUP_REQUEST,LOGIN_REQUEST} from "../actions/User";
import {getTodoRequest} from "../actions/Todo";
import {push} from "connected-react-router";

function* login(action){
    const {email,pass}=action.payload;
    const {token,err}=yield call(sendLoginRequest,email,pass);
    if(err){
        yield put(loginFailed(err));
    }else{
        yield put(loginSuccess(token));
        yield put(getTodoRequest(token));
        yield put(push('/todo'));
    }
}

function* signUp(action){
    const {email,username,pass}=action.payload;
    const {token,err}=yield call(sendSignUpRequest,username,email,pass);
    if(err){
        yield put(signUpFailed(err));
    }else{
        yield put(signUpSuccess(token));
        yield put(getTodoRequest(token));
        yield put(push('todo'));
    }
}

const saga=[
    takeEvery(LOGIN_REQUEST,login),
    takeEvery(SIGNUP_REQUEST,signUp)
];

export default saga;