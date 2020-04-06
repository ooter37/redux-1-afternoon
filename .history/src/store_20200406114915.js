import createStore from 'redux'


const initialState = {
    recipeName: '',
    recipeCategory: ''
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATENAME:
            return {

            };
        case UPDATECATEGORY:
            return {

            };    
        default: 
            return state;
    }
}

export default createStore(reducer)