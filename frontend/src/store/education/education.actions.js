import axios from "axios";
import * as types from "./education.types";

const getDetailsLoading = (payload) => {
    return {
      type: types.GET_DETAILS_LOADING_ED,
      payload,
    };
  };
  const getDetailsSuccess = (payload) => {
    return {
      type: types.GET_DETAILS_SUCCESS_ED,
      payload,
    };
  };
  const getDetailsError = (payload) => {
    return {
      type: types.GET_DETAILS_ERROR_ED,
      payload,
    };
  };
  
  const getEdDetailsAPI = (payload) => (dispatch) => {
    dispatch(getDetailsLoading(payload));
    axios
      //.get(`https://backendenmgd-production.up.railway.app/register?_page=${payload}&_limit=5`)
      .get(`https://entrnsh.onrender.com/education`)
      .then((r) => dispatch(getDetailsSuccess(r.data)))
      .catch((e) => dispatch(getDetailsError(e.data)));
  };
  
  // ##########################################
  const addDetailsLoading = (payload) => {
    return {
      type: types.DELETE_DETAILS_LOADING_ED,
      payload,
    };
  };
  const addDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_DETAILS_SUCCESS_ED,
      payload,
    };
  };
  const addDetailsError = (payload) => {
    return {
      type: types.DELETE_DETAILS_ERROR_ED,
      payload,
    };
  };
  
  const addEdDetailsAPI = (payload) => (dispatch) => {
    dispatch(addDetailsLoading(payload));
    axios
      .post(`https://entrnsh.onrender.com/education`, payload)
      .then((r) => {
        dispatch(addDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getEdDetailsAPI());
      })
      .catch((e) => dispatch(addDetailsError(e.data)));
  };
  // ##########################################
  const updateDetailsLoading = (payload) => {
    return {
      type: types.UPDATE_DETAILS_LOADING_ED,
      payload,
    };
  };
  const updateDetailsSuccess = (payload) => {
    return {
      type: types.UPDATE_DETAILS_SUCCESS_ED,
      payload,
    };
  };
  const updateDetailsError = (payload) => {
    return {
      type: types.UPDATE_DETAILS_ERROR_ED,
      payload,
    };
  };
  
  const updateEdDetailsAPI = (payload) => (dispatch) => {
    dispatch(updateDetailsLoading(payload));
    console.log("payload",payload)
    axios
      .patch(
        `https://entrnsh.onrender.com/education/${payload._id}`,
        payload

      )
      .then((r) => {
        dispatch(updateDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getEdDetailsAPI());
      })
      .catch((e) => dispatch(updateDetailsError(e.data)));
  };
  
  // ##########################################
  const deleteDetailsLoading = (payload) => {
    return {
      type: types.DELETE_DETAILS_LOADING_ED,
      payload,
    };
  };
  const deleteDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_DETAILS_SUCCESS_ED,
      payload,
    };
  };
  const deleteDetailsError = (payload) => {
    return {
      type: types.DELETE_DETAILS_ERROR_ED,
      payload,
    };
  };
  
  const deleteEdDetailsAPI = (payload) => (dispatch) => {
    dispatch(deleteDetailsLoading(payload));
    axios
      .delete(`https://entrnsh.onrender.com/education/${payload}`)
      .then((r) => {
        dispatch(deleteDetailsSuccess(r.data));

      })
      .then(() => {
        dispatch(getEdDetailsAPI());
      })
      .catch((e) => dispatch(deleteDetailsError(e.data)));
  };

  const FilterEdDetailsAPI = (payload) => (dispatch) => {
    dispatch(getDetailsLoading(payload));
    axios
      .get(payload)
      
      .then((r) => dispatch(getDetailsSuccess(r.data)))
      .catch((e) => dispatch(getDetailsError(e.data)));
  };
  
  export {
    getEdDetailsAPI,
    addEdDetailsAPI,
    updateEdDetailsAPI,
    deleteEdDetailsAPI,
    FilterEdDetailsAPI
  };
  