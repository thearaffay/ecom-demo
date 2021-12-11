import PRODUCTS from "../../Data/dummy_data";
import { DELETE_PRODUCT, SET_PRODUCTS} from "../actions/products";


const initialState = {
    availableProducts: [],
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                availableProducts: action.payload,
                userProducts : action.payload.filter(prod => prod.ownerId === 'u1')
            }
        case DELETE_PRODUCT : 
            return {
                ...state,
                userProducts: state.userProducts.filter(product => product.id !== action.pid),
                availableProducts: state.availableProducts.filter(product => product.id !== action.pid)
            };
    }
    return state;
};