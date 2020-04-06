import {createStore} from 'redux'


const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const RECIPE_NAME = 'RECIPE_NAME'
export const RECIPE_CATEGORY = 'RECIPE_CATEGORY'
export const AUTHOR_FIRST = 'AUTHOR_FIRST'
export const AUTHOR_LAST = 'AUTHOR_LAST'
export const INGREDIENTS = 'INGREDIENTS'
export const INSTRUCTIONS = 'INSTRUCTIONS'
export const NEW_RECIPE = 'NEW_RECIPE'

function reducer(state = initialState, action) {
    switch (action.type) {
        case RECIPE_NAME:
            return {
                ...state, recipeName: action.payload
            };
        case RECIPE_CATEGORY:
            return {
                ...state, recipeCategory: action.payload
            };    
        case AUTHOR_FIRST: 
            return {
                ...state, authorFirstName: action.payload
            };
        case AUTHOR_LAST: 
            return {
                ...state, authorLastName: action.payload
            };
        case INGREDIENTS:
            return {
                ...state, ingredients: [...state.ingredients, action.payload]
            };
        case INSTRUCTIONS:
            return {
                ...state, instructions: [...state.instructions, action.payload]
            };
        case NEW_RECIPE: 
        const {recipeName, recipeCategory, authorFirstName, authorLastName, ingredients, instructions} = state
        return {
            ...state, recipes: [...state.recipes, {
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions
            }]
        }
        default: 
            return state;
    }
}

export default createStore(reducer)