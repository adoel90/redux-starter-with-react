
const asyncActionType = (type) => ({
    PENDING: `[API] ${type}_PENDING`,
    SUCCESS: `[API] ${type}_SUCCESS`,
    ERROR: `[API] ${type}_ERROR`,
});

export const ADD_RECIPE = '[Action] Add Recipe...';
export const FETCH_RECIPES = asyncActionType('FETCH_RECIPES');
// export const FETCH_RECIPES = '[API] Fetch Recipes...';
export const GET_LIST_RECIPE = '[API] Get List Recipes...';

export const API_REQUEST = 'API_REQUEST';

export const ADD_INGREDIENT = '[Action] Add Ingredient...';

// export const CREATE_USER = '[API] Create user...';
export const CREATE_USER = asyncActionType('CREATE_USER');

//CRUD WITH REQRES API
export const ADD_USER = '[Action] Add user & job ...';