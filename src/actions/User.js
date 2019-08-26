export const LOGIN_REQUEST ="LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT ="LOGOUT";
export const SIGNUP_REQUEST ="SIGNUP_REQUEST";
export const SIGNUP_SUCCESS ="SIGNUP_SUCCESS";
export const SIGNUP_FAILED ="SIGNUP_FAILED";

export const loginRequest=(email,pass)=>({
    type: LOGIN_REQUEST,
    payload: {email,pass}
})

export const loginSuccess=(token)=>({
    type: LOGIN_SUCCESS,
    payload: token
})

export const loginFailed=(err)=>({
    type: LOGIN_FAILED,
    payload: err
})

export const logout=()=>({
    type:LOGOUT
})

export const signUpRequest = (username,email,pass)=>({
    type: SIGNUP_REQUEST,
    payload: {username,email,pass}
})

export const signUpSuccess=(token)=>({
    type: SIGNUP_SUCCESS,
    payload: token
})

export const signUpFailed=(err)=>({
    type: SIGNUP_FAILED,
    payload: err
})