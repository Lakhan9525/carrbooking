import * as types from "./education.types";

const initialState = {
    users: {
      loading: false,
      error: false,
    },
    data: [],
  };
  
  export const Reducer2 = (state = initialState, { type, payload }) => {
    switch (type) {
      case types.GET_DETAILS_LOADING_ED:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.GET_DETAILS_SUCCESS_ED:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
          data: [...payload],
        };
      case types.GET_DETAILS_ERROR_ED:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.DELETE_DETAILS_LOADING_ED:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.DELETE_DETAILS_SUCCESS_ED:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.DELETE_DETAILS_ERROR_ED:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.ADD_DETAILS_LOADING_ED:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.ADD_DETAILS_SUCCESS_ED:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.ADD_DETAILS_ERROR_ED:
        return {
          ...state,
          users: {
            loading: false,
            error: true,
          },
        };
      case types.UPDATE_DETAILS_LOADING_ED:
        return {
          ...state,
          users: {
            loading: true,
            error: false,
          },
        };
      case types.UPDATE_DETAILS_SUCCESS_ED:
        return {
          ...state,
          users: {
            loading: false,
            error: false,
          },
        };
      case types.UPDATE_DETAILS_ERROR_ED:
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
  
