import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS

} from '../constants/userConstants'

import axios from 'axios'

//Login

export const login = (email, password) => async(dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST })

        const config = {
            headers: {
                'Content-type' : 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:4000/api/v1/login',{ email, password }, config )

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

//new user
export const register = (userData) => async(dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-type' : 'multipart/form-data'
            }
        }

        const { data } = await axios.post('/api/v1/register',{ userData }, config )

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
        
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


    //errors
    export const clearErrors = () => async (dispatch) => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }