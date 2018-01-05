export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const add_incredient = (value) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: value
    };
};

export const remove_incredient = (value) => {
    return {
        type: REMOVE_INGREDIENT,
        ingredientName: value
    };
};