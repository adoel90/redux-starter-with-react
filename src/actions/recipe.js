import { ADD_RECIPE, GET_LIST_RECIPE, FETCH_RECIPES } from '../constants/action-types';

export const addReceipent = (name) => ({
    type: ADD_RECIPE, name
});

export const getListRecipe = (data) => ({
    type: GET_LIST_RECIPE, 
    payload: data 
})

export const fetchRecipes = () => ({
    type: FETCH_RECIPES
  });


