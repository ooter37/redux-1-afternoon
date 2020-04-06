import {createStore} from 'redux'


const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: ''
}

export const RECIPE_NAME = 'RECIPE_NAME'
export const RECIPE_CATEGORY = 'RECIPE_CATEGORY'
export const AUTHOR_FIRST = 'AUTHOR_FIRST'
export const AUTHOR_LAST = 'AUTHOR_LAST'
export const INGREDIENTS = 'INGREDIENTS'

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
                state, authorFirstName: action.payload
            };
        case AUTHOR_LAST: 
            return {
                state, authorLastName: action.payload
            };
        default: 
            return state;
    }
}

export default createStore(reducer)