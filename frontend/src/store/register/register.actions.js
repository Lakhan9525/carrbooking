import axios from "axios";
import * as types from "./register.types";

const getDetailsLoading = (payload) => {
    return {
      type: types.GET_DETAILS_LOADING,
      payload,
    };
  };
  const getDetailsSuccess = (payload) => {
    return {
      type: types.GET_DETAILS_SUCCESS,
      payload,
    };
  };
  const getDetailsError = (payload) => {
    return {
      type: types.GET_DETAILS_ERROR,
      payload,
    };
  };
  
  const getDetailsAPI = (payload) => (dispatch) => {
    dispatch(getDetailsLoading(payload));
    axios
      //.get(`https://backendenmgd-production.up.railway.app/register?_page=${payload}&_limit=5`)
      .get(`https://car-server-0i46.onrender.com/register`)
      .then((r) => dispatch(getDetailsSuccess(r.data)))
      .catch((e) => dispatch(getDetailsError(e.data)));
  };
  
  // ##########################################
  const addDetailsLoading = (payload) => {
    return {
      type: types.DELETE_DETAILS_LOADING,
      payload,
    };
  };
  const addDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_DETAILS_SUCCESS,
      payload,
    };
  };
  const addDetailsError = (payload) => {
    return {
      type: types.DELETE_DETAILS_ERROR,
      payload,
    };
  };
  
  const addDetailsAPI = (payload) => (dispatch) => {
    dispatch(addDetailsLoading(payload));
    axios
      .post(`https://car-server-0i46.onrender.com/register`, payload)
      .then((r) => {
        dispatch(addDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getDetailsAPI());
      })
      .catch((e) => dispatch(addDetailsError(e.data)));
  };
  // ##########################################
  const updateDetailsLoading = (payload) => {
    return {
      type: types.UPDATE_DETAILS_LOADING,
      payload,
    };
  };
  const updateDetailsSuccess = (payload) => {
    return {
      type: types.UPDATE_DETAILS_SUCCESS,
      payload,
    };
  };
  const updateDetailsError = (payload) => {
    return {
      type: types.UPDATE_DETAILS_ERROR,
      payload,
    };
  };
  
  const updateDetailsAPI = (payload) => (dispatch) => {
    dispatch(updateDetailsLoading(payload));
    console.log("payload",payload)
    axios
      .patch(
        `https://car-server-0i46.onrender.com/register/${payload._id}`,
        payload

      )
      .then((r) => {
        dispatch(updateDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getDetailsAPI());
      })
      .catch((e) => dispatch(updateDetailsError(e.data)));
  };
  
  // ##########################################
  const deleteDetailsLoading = (payload) => {
    return {
      type: types.DELETE_DETAILS_LOADING,
      payload,
    };
  };
  const deleteDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_DETAILS_SUCCESS,
      payload,
    };
  };
  const deleteDetailsError = (payload) => {
    return {
      type: types.DELETE_DETAILS_ERROR,
      payload,
    };
  };
  
  const deleteDetailsAPI = (payload) => (dispatch) => {
    dispatch(deleteDetailsLoading(payload));
    axios
      .delete(`https://car-server-0i46.onrender.com/register/${payload}`)
      .then((r) => {
        dispatch(deleteDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getDetailsAPI());
      })
      .catch((e) => dispatch(deleteDetailsError(e.data)));
  };

  const FilterDetailsAPI = (payload) => (dispatch) => {
    dispatch(getDetailsLoading(payload));
    axios
      .get(payload)
      
      .then((r) => dispatch(getDetailsSuccess(r.data)))
      .catch((e) => dispatch(getDetailsError(e.data)));
  };
  
  export {
    getDetailsAPI,
    addDetailsAPI,
    updateDetailsAPI,
    deleteDetailsAPI,
    FilterDetailsAPI
  };
  