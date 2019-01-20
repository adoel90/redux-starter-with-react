
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