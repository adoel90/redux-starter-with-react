import { CREATE_USER, API_POST_USER_REQUEST, API_GET_USER_REQUEST, GET_LIST_USERS } from '../constants/action-types';
import { URL_API } from '../constants/config-api';

//*
export const addUser = (data) => ({
    type: API_POST_USER_REQUEST,
    payload: {
        url: URL_API + '/users',
        next: CREATE_USER
    },
    data: data
});

export const getListUser = () => ({
    type: API_GET_USER_REQUEST,
    payload: {
        url: URL_API + '/users',
        next: GET_LIST_USERS
    }
})