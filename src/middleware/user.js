
import axios from 'axios'
import { API_REQUEST } from '../constants/action-types';


const userMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === API_REQUEST){

        console.log(action.payload.data != null ? action.payload.data.name : action.payload.data);
        
        axios
            .post(action.payload.url, action.payload.data)
            .then(function (response) {
                console.log(response);

                dispatch({ type: action.payload.next.SUCCESS})
            })
            .catch(function  (error) {
                console.log(error);
                dispatch({ type: action.payload.next.ERROR})
            });

        dispatch({ type: action.payload.next.PENDING });
    }

    next(action);
}; 

export default userMiddleware;