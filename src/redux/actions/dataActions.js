// import { SET_POSTS,LOADING_DATA,LIKE_POST,UNLIKE_POST,DELETE_POST,SET_ERRORS,CLEAR_ERRORS,POSTING,LOADING_UI } from '../types';
// import axios from 'axios';

// //get all posts
// export const getPosts = () => (dispatch) => {
//     dispatch({ type: LOADING_DATA });
//     axios.get('/posts')
//     .then((result) => {
//         dispatch({
//             type: SET_POSTS,
//             payload: result.data
//         })
//     })
//     .catch((err) => {
//         dispatch({
//             type: SET_POSTS,
//             payload: null
//         })
//     })
// }

// //posting
// export const postAction = (newPost) =>  (dispatch) => {
//     dispatch({ type: LOADING_UI});
//     axios.post('/post',newPost)
//         .then((result) => {
//             dispatch({
//                 type: POSTING,
//                 payload: result.data
//             });
//             dispatch({
//                 type: CLEAR_ERRORS
//             })
//         })
//         .catch((error) => {
//             dispatch({
//                 type: SET_ERRORS,
//                 payload: error.response.data
//             })
//         })
// }

// //like a post
// export const likePost = (postId) => (dispatch) => {
//     axios.get(`/post/${postId}/like`)
//     .then((result) => {
//         dispatch({
//             type: LIKE_POST,
//             payload: result.data
//         })
//     })
//     .catch((err) => console.log(err));
// }

// //unlike a post
// export const unlikePost = (postId) => (dispatch) => {
//     axios.get(`/post/${postId}/unlike`)
//     .then((result) => {
//         dispatch({
//             type: UNLIKE_POST,
//             payload: result.data
//         })
//     })
//     .catch((err) => console.log(err));
// }

// //delete a post
// export const deletePost = (postId) => (dispatch) => {
//     axios.delete(`/post/${postId}`)
//         .then(() => {
//             dispatch({ type: DELETE_POST, payload: postId})
//         })
//         .catch((error) => console.log(error))
// }