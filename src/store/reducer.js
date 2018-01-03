import * as actionTypes from './actions';

const initialState = {

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT :
            return {
                ...state
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state
            };
        default: 
            return state;     
    }
}

export default reducer;