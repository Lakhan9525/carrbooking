import * as types from "./auth.types";

let token = localStorage.getItem("userData") ;


const initialState = {
    loading: false,
    error: false,
    isAuth: false,
    token: "",
    signupLoding: false,
    signupSuccess: false,
    signupError: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOGIN_LOADING: {
            return {
                ...state, loading: true, error: false, signupSuccess: false,
                signupError: false, };
        }
        case types.LOGIN_SUCCESS: {
            localStorage.setItem("userData", JSON.stringify(payload));
            return {
                ...state,
                loading: false,
                error: false,
                isAuth: true,
                token: payload.token,
                signupSuccess: false,
                signupError: false,
            };
        }
        case types.LOGIN_ERROR: {
            return {
                ...state, loading: false, error: true, isAuth: false, signupSuccess: false,
                signupError: false, };
        }
        case types.SIGNUP_LOADING: {
            return {
                ...state, signupLoding: true,
                loading: false,
                error: false,
            };
        }
        case types.SIGNUP_SUCCESS: {
            return {
                ...state,
                signupLoding: false,
                signupSuccess: true,
                loading: false,
                error: false,
            };
        }
        case types.SIGNUP_ERROR: {
            return {
                ...state,
                signupLoding: false,
                signupSuccess: false,
                signupError: true,
                loading: false,
                error: false,
            };
        }
        case types.LOGOUT:
            return {
                ...state,
                isAuth: false,
                token: ""
            };
        default:
            return state;
    }
};