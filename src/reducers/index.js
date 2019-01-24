import {combineReducers} from 'redux';
import recipesReducer  from './recipes';
import ingredientsReducer  from './ingredients';
import userReducer from './user';

const rootReducer = combineReducers({
    recipes: recipesReducer,
    ingredients : ingredientsReducer,
    user : userReducer
});

export default rootReducer;