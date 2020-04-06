import createStore from 'redux'


const initialState = {
    recipeName: '',
    recipeCategory: ''
}

export const NAME = 'NAME'
export const CATEGORY = 'CATEGORY'

function reducer(state = initialState, action) {
    switch (action.type) {
        case NAME:
            return {
                recipeName: action.payload
            };
        case CATEGORY:
            return {
                recipeCategory: action.payload
            };    
        default: 
            return state;
    }
}

export default createStore(reducer)