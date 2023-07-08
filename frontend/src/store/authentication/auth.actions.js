import * as types from "./auth.types";

export const loginAPI = (payload) => (dispatch) => {
    console.log('payload:', payload)
    
    dispatch({ type: types.LOGIN_LOADING });

    fetch("https://entrnsh.onrender.com/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((r) => r.json())
        .then((r) => {
            console.log('r:', r)
            dispatch({ type: types.LOGIN_SUCCESS, payload: r });
        })
        .catch((e) => {
            dispatch({ type: types.LOGIN_ERROR });
        })

};

export const signupAPI = (payload) => (dispatch) => {
    console.log('payload:', payload)
    
    dispatch({ type: types.SIGNUP_LOADING });

    fetch("https://entrnsh.onrender.com/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((r) => r.json())
        .then((r) => {
            console.log('r:', r)
            dispatch({ type: types.SIGNUP_SUCCESS, payload: r });
        })
        .catch((e) => {
            console.log('e:', e)
            dispatch({ type: types.SIGNUP_ERROR });
        })

};

export const Userlogout = () => (dispatch) => {
    console.log('dispatch:')
    dispatch({ type: types.LOGOUT });
};