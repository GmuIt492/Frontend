import { SET_POSTS,LOADING_DATA,POSTING,DELETE_POST,SET_HEADER,HEADER,SET_HOURS } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: false
}

export default function(state = initialState,action) {
    let index;
    switch(action.type) {
        //load posts
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        //set post w/ payload
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case DELETE_POST:
            index = state.posts.findIndex((post) => post.feedbackId === action.payload);
            state.posts.splice(index,1);
            return {
                ...state
            }
        case POSTING:
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        //set header w/ payload
        case SET_HEADER:
            return {
                ...state,
                header: action.payload,
                loading: false
            }
        //create header w/ payload
        case HEADER:
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        //set hours w/ payload
        case SET_HOURS:
            return {
                ...state,
                hours: action.payload,
                loading: false
            }
        default:
            return state;
    }
}