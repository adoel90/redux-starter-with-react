import { ADD_RECIPE, GET_LIST_RECIPE, FETCH_RECIPES, API_REQUEST } from '../constants/action-types';


export const addReceipent = (name) => ({
    type: ADD_RECIPE, name
});

// export const getListRecipe = (data) => ({
//     type: GET_LIST_RECIPE, 
//     payload: data 
// })

// export const fetchRecipes = () => ({
//     type: FETCH_RECIPES
// });

export const fetchRecipes = () => ({
    type: API_REQUEST,
    payload: {
      // url: 'http://localhost:5000/api/users?page=2',
      url: './db.json',
      next: FETCH_RECIPES
    }
  });

  // /api/users?page=2