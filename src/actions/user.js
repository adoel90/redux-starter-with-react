import { ADD_USER } from '../constants/action-types';

export const addUser = (data) => ({
    type: ADD_USER,
    payload: data
})