import axios from 'axios';
import { FETCH_RECIPES, API_REQUEST   } from '../constants/action-types';
import { getListRecipe } from '../actions/recipe';
// import * as URL from '../db/db.json';
//  [In this case, we can not use this way to get data from json], we put file .json in PUBLIC_FOLDER

function fetchData(url, callback) {

    fetch(url)
        .then((response) => {  
            if (response.status !== 200) {
                console.log(`Error fetching recipes: ${ response.status }`);
            } else {
                response.json().then(callback);
            }
        })
        .catch((err) => console.log(`Error fetching recipes: ${ err }`))
};

const apiMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === API_REQUEST){
        axios
            .get(action.payload.url) 
            .then((response) => {

                if (response.status !== 200) {
                    console.log(`Error fetching recipes: ${ response.status }`);
                } else {

                    dispatch({ type: action.payload.next.SUCCESS, payload: response.data})
                }
            })
            .catch((err) => console.log(`Error fetching recipes: ${ err }`))

            dispatch({ type: action.payload.next.PENDING });
    }

    next(action);
};

export default apiMiddleware;

