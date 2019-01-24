

import { ADD_RECIPE, GET_LIST_RECIPE, FETCH_RECIPES} from '../constants/action-types';

const initialState = {
    loading: false,
    list: []
  };

// const recipesReducer = (recipes = [], action) =>{
const recipesReducer = ( state = initialState, action) =>{
    switch (action.type){

        case ADD_RECIPE :
            console.log("Not work, because i have to FORCE DATA in to JSON File in React Public Folder ", state);
            // return state.list.concat({name:action.name})
            // return recipes.concat({name: action.name});
            return state;

        // case GET_LIST_RECIPE:
        //     return action.payload.recipes;

        case FETCH_RECIPES.PENDING:
            return Object.assign({}, state, {
                loading: true
            });
  
        case FETCH_RECIPES.SUCCESS:

            return Object.assign({}, state, {
                loading: false,
                // list: action.payload.recipes.map((recipe) => recipe.name)
                list: action.payload.recipes
                
            });
  
        case FETCH_RECIPES.ERROR:
            return Object.assign({}, state, {
                loading: false
            });

    }

    return state;
};

export default recipesReducer;