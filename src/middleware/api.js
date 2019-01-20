import axios from 'axios';
import { FETCH_RECIPES   } from '../constants/action-types';
import { getListRecipe } from '../action/recipe';
// import * as URL from '../db/db.json';
//  [In this case, we can not use this way to get data from json]

const URL = '../db/db.json';

function fetchData(url, callback) {

    // axios
    //     .get(url)
    //     .then(callback)
    //     .catch((err) => console.log(`Error fetching recipes: ${ err }`))

    fetch(url)
        .then((response) => {  
            if (response.status !== 200) {
                console.log(`Error fetching recipes: ${ response.status }`);
            } else {
                response.json().then(callback);
            }
        })
        .catch((err) => console.log(`Error fetching recipes: ${ err }`))
}

const apiMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === FETCH_RECIPES){
        fetchData(URL, (data) => dispatch(getListRecipe(data)));
    }

    next(action);
};

export default apiMiddleware;

