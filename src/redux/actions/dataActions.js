import { SET_POSTS,LOADING_DATA,DELETE_POST,SET_ERRORS,CLEAR_ERRORS,POSTING,LOADING_UI,SET_HOURS } from '../types';
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

//delete a post
export const deletePost = (feedbackId) => (dispatch) => {
    axios.delete(`/feedback/${feedbackId}`)
        .then(() => {
            dispatch({ type: DELETE_POST, payload: feedbackId})
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