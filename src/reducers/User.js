import * as actions from '../actions/User';

const initState={
    token: localStorage.getItem('token')||'',
};

export default function userReducer(state=initState,action){
    switch (action.type){
        case actions.LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload)
            return {
                ...state,
                token: action.payload
            }
        case actions.LOGIN_FAILED:
            localStorage.removeItem('token');
            return {
                ...state,
                token: ''
            }
        case actions.SIGNUP_SUCCESS:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                token: action.payload
            }
        case actions.SIGNUP_FAILED:
            localStorage.removeItem('token')
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}