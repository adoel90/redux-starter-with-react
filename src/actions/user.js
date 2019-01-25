import { ADD_USER, CREATE_USER, API_REQUEST } from '../constants/action-types';
import { URL_API } from '../constants/config-api';

//*
export const addUser = (data) => ({
    type: API_REQUEST,
    payload: {
        url: URL_API + '/users',
        data,
        next: CREATE_USER
    }
});