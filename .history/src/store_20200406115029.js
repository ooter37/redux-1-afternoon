import createStore from 'redux'


const initialState = {
    recipeName: '',
    recipeCategory: ''
}

export const UPDATENAME = 'UPDATENAME'
export const UPDATECAT = 'UPDATECAT'

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATENAME:
            return {

            };
        case UPDATECAT:
            return {

            };    
        default: 
            return state;
    }
}

export default createStore(reducer)