import { SET_POSTS,LOADING_DATA,DELETE_POST,SET_ERRORS,CLEAR_ERRORS,POSTING,LOADING_UI,SET_HEADER,HEADER,DELETE_HEADER,SET_HOURS } from '../types';
import axios from 'axios';

//get all posts
export const getFeedbacks = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/feedback')
    .then((result) => {
        dispatch({
            type: SET_POSTS,
            payload: result.data
        })
    })
    .catch((err) => {
        dispatch({
            type: SET_POSTS,
            payload: null
        })
    })
}

//create feedback
export const feedbackAction = (newFeedback) => (dispatch) => {
    // console.log(newFeedback);
    dispatch({ type: LOADING_UI});
    axios.post('/feedback',newFeedback)
        .then((result) => {
            dispatch({
                type: POSTING,
                payload: result.data
            });
            dispatch({
                type: CLEAR_ERRORS
            })
        })
        .catch((error) => {
            dispatch({
                type: SET_ERRORS,
                payload: error.response.data
            })
        })
}

//delete a feedback
export const deleteFeedback = (feedbackId) => (dispatch) => {
    axios.delete(`/feedback/${feedbackId}`)
        .then(() => {
            dispatch({ type: DELETE_POST, payload: feedbackId})
        })
        .catch((error) => console.log(error))
}

//get header notification
export const getHeaderNotif = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/header')
    .then((result) => {
        dispatch({
            type: SET_HEADER,
            payload: result.data
        })
    })
    .catch((err) => {
        dispatch({
            type: SET_HEADER,
            payload: null
        })
    })
}

//create header notification
export const headerNotifAction = (newHeader) => (dispatch) => {
    // console.log(newHeader);
    dispatch({ type: LOADING_UI});
    axios.post('/header',newHeader)
        .then((result) => {
            dispatch({
                type: HEADER,
                payload: result.data
            });
            dispatch({
                type: CLEAR_ERRORS
            })
            alert("Home Page Notification Created / Updated");
        })
        .catch((error) => {
            dispatch({
                type: SET_ERRORS,
                payload: error.response.data
            })
        })
}

//delete all header notifications
export const deleteHeaderNotifAction = () => (dispatch) => {
    axios.delete(`/header`)
        .then(() => {
            dispatch({
                type: DELETE_HEADER
            })
            alert("Home Page Notification Deleted");
        })
        .catch((error) => console.log(error))
}

//get hours
export const getHours = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/hour')
    .then((result) => {
        dispatch({
            type: SET_HOURS,
            payload: result.data
        })
    })
    .catch((err) => {
        dispatch({
            type: SET_HOURS,
            payload: null
        })
    })
}