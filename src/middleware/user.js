
import axios from 'axios'
import { API_POST_USER_REQUEST, API_GET_USER_REQUEST } from '../constants/action-types';


const userMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === API_POST_USER_REQUEST){    
        
        console.log(action)
        axios
            .post(action.payload.url, action.data.data)
            .then(function (response) {
                // console.log(response)
                dispatch({ type: action.payload.next.SUCCESS})
            })
            .catch(function  (error) {
                console.log(error);
                dispatch({ type: action.payload.next.ERROR})
            });

        dispatch({ type: action.payload.next.PENDING });
    }

    if (action.type === API_GET_USER_REQUEST) {
        
        axios
            .get(action.payload.url)
            .then(function (response) {
   
                if(response.data.data.length > 0){
                    dispatch({type: action.payload.next.SUCCESS, payload: response.data})
                
                } else {
                    dispatch({type:action.payload.next.PENDING})
                    console.warn(" ==> Check your data is not empty !");
                }
                
            })
            .catch(function (error) {
                console.log(error);
                dispatch({type: action.payload.next.ERROR})
            })

        dispatch({type: action.payload.next.PENDING})
        
    }

    next(action);
}; 

export default userMiddleware;