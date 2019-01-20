

import { ADD_RECIPE, GET_LIST_RECIPE} from '../constants/action-types';

const recipesReducer = (recipes = [], action) =>{

    switch (action.type){

        case ADD_RECIPE :
            return recipes.concat({name: action.name});

        case GET_LIST_RECIPE:
            return action.payload.recipes;

    }

    return recipes;
};

export default recipesReducer;