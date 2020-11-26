import { SET_POSTS,LOADING_DATA,POSTING,DELETE_POST,SET_HEADER,HEADER,DELETE_HEADER,SET_HOURS,HOURS } from '../types';

const initialState = {
    posts: [],
    post: {},
    header: [],
    hours: [],
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
                header: [
                    action.payload,
                    ...state.header
                ]
            }
        //delete all header notifications
        case DELETE_HEADER:
            state.header = [];
            return {
                ...state
            }
        //set hours w/ payload
        case SET_HOURS:
            return {
                ...state,
                hours: action.payload,
                loading: false
            }
        //create hours w/ payload
        case HOURS:
            return {
                ...state,
                hours: [
                    action.payload,
                    ...state.hours
                ]
            }
        default:
            return state;
    }
}