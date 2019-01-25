
import axios from 'axios'
import { API_POST_USER_REQUEST, API_GET_USER_REQUEST } from '../constants/action-types';


const userMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === API_POST_USER_REQUEST){        
        axios
            .post(action.payload.url, action.data)
            .then(function (response) {
                dispatch({ type: action.payload.next.SUCCESS})
            })
            .catch(function  (error) {
                console.log(error);
                dispatch({ type: action.payload.next.ERROR})
            });

        dispatch({ type: action.payload.next.PENDING });
    }

    if (action.type === API_GET_USER_REQUEST) {
        console.log(action);
    }

    next(action);
}; 

export default userMiddleware;