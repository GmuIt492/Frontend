import { SET_POSTS,LOADING_DATA,LIKE_POST,UNLIKE_POST,DELETE_POST,SET_ERRORS,CLEAR_ERRORS,POSTING,LOADING_UI } from '../types';
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
export const deletePost = (postId) => (dispatch) => {
    axios.delete(`/post/${postId}`)
        .then(() => {
            dispatch({ type: DELETE_POST, payload: postId})
        })
        .catch((error) => console.log(error))
}