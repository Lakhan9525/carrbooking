import * as types from "./register.types";

const initialState = {
    users: {
      loading: false,
      error: false,
    },
    data: [],
  };
  
  export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case types.GET_DETAILS_LOADING:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.GET_DETAILS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
          data: [...payload],
        };
      case types.GET_DETAILS_ERROR:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.DELETE_DETAILS_LOADING:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.DELETE_DETAILS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.DELETE_DETAILS_ERROR:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.ADD_DETAILS_LOADING:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.ADD_DETAILS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.ADD_DETAILS_ERROR:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.UPDATE_DETAILS_LOADING:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.UPDATE_DETAILS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.UPDATE_DETAILS_ERROR:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      default:
        return state;
    }
  };
  
