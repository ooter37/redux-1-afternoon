import createStore from 'redux'


const initialState = {
    recipeName: '',
    recipeCategory: ''
}


function reducer(state = initialState, action) {
    switch (action.type) {
        default: 
            return state;
    }
}

export default createStore(reducer)