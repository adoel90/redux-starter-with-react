
const ADD_INGREDIENT = 'ADD_INGREDIENT';

const ingredientsReducer = (ingredients = [], action) => {
    switch (action.type){
        case ADD_INGREDIENT:

            const newIngredient = {
                recipes: action.recipes,
                name: action.name,
                quantity: action.quantity
            };
            return ingredients.concat(newIngredient);

        default :
            // console.log(";(");
            break
    }  
    
    return ingredients;
};

export default ingredientsReducer;