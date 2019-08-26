export const LOGIN_REQUEST ="LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT ="LOGOUT";

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