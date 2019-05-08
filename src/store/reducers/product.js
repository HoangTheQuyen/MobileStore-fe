import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState = {
    products: null
}

const setProducts = (state, action) =>{
    return updateObject(state, {
        STATUS: action.response.STATUS,
        totalItems: action.response.totalItems,
        products: action.response.products
    })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PRODUCTS_ALL: return setProducts( state, action );
        
        default: return state;
    }
};

export default reducer;