import { SET_USER,
    SET_LOGIN,
    SET_UNAUTHENTICATED,
    SET_AUTHENTICATED,
    LOADING_USER
} from '../types';

//state of user reducer data
const initialState = {
    authenticated: false,
    loading: false,
    status: false,
    credentials: {}
};

//switch case user login state
export default function(state = initialState, action) {
    switch(action.type) {
        //change auth flag
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        //change auth flag
        case SET_UNAUTHENTICATED:
            return initialState;
        //set user details w/ payload
        case SET_USER:
            return {
                authenticated: true,
                loading: false,
                ...action.payload
            }
        //set user login state
        case SET_LOGIN:
            return {
                loading: false,
                status: true
            }
        //load user details
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}