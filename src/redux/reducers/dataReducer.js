import { SET_POSTS,LOADING_DATA,POSTING,DELETE_POST } from '../types';

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
            index = state.posts.findIndex((post) => post.postId === action.payload);
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
        default:
            return state;
    }
}