import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS

} from '../constants/userConstants'

export const authReducer = (state = { user: {}}, action) => {
    switch(action.type) {

        case LOGIN_REQUEST:
            return {
                loading: true,
                authUser: false,
                authRoles: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                authUser: true,
                authRoles: false,
                user: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                authUser: false,
                authRoles: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state
    }
}