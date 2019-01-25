
const asyncActionType = (type) => ({
    PENDING: `[API] ${type}_PENDING`,
    SUCCESS: `[API] ${type}_SUCCESS`,
    ERROR: `[API] ${type}_ERROR`,
});

const asyncActionTypeUser = (type) => ({
    PENDING: `[API] ${type}_PENDING`,
    SUCCESS: `[API] ${type}_SUCCESS`,
    ERROR: `[API] ${type}_ERROR`,
});

export const ADD_RECIPE = '[Action] Add Recipe...';
export const FETCH_RECIPES = asyncActionType('FETCH_RECIPES');
// export const FETCH_RECIPES = '[API] Fetch Recipes...';
export const GET_LIST_RECIPE = '[API] Get List Recipes...';

export const API_RECIPE_REQUEST = '[Middleware] Api Recipes Request...';
// export const API_USER_REQUEST = '[Middleware] Api User Request...';
export const API_POST_USER_REQUEST = '[Middleware] Api POST User Request...';
export const API_GET_USER_REQUEST = '[Middleware] Api GET User Request...';

export const ADD_INGREDIENT = '[Action] Add Ingredient...';

// export const CREATE_USER = '[API] Create user...';
export const CREATE_USER = asyncActionTypeUser('CREATE_USER');
export const GET_LIST_USERS = asyncActionTypeUser('GET_LIST_USERS');

//CRUD WITH REQRES API
export const ADD_USER = '[Action] Add user & job ...';