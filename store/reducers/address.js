import { ADD_ADDRESS, GET_ADDRESS } from "../actions/address";

const initialState = {
    address:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            const addedAddress = action.address;
            return {...state,  address: state.address.push(addedAddress)
            }; 
            
            case GET_ADDRESS:
            return {...state,address: action.address};
           
    }
    return state;
    
}