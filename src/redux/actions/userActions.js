import { 
    SET_USER,
    SET_LOGIN,
    SET_ERRORS,
    LOADING_UI,
    CLEAR_ERRORS,
    SET_UNAUTHENTICATED,
    LOADING_USER
} from '../types';
import axios from 'axios';

//login function
export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    //process login
    axios.post('/login',userData)
    .then((result) => {
        dispatch({ type: SET_LOGIN })
        // setAuthorizationHeader(result.data.token);
        // dispatch(getUserData());
        //clear error from form
        dispatch({ type: CLEAR_ERRORS});
    })
    .catch((err) => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    });
}

//logout function
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
}

//get user data function when logged in
export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/user')
    .then((result) => {
        dispatch({
            type: SET_USER,
            payload: result.data
        })
    })
    .catch((err) => console.log(err));
}

const setAuthorizationHeader = (token) => {
    //store bearer token locally and get user data
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}