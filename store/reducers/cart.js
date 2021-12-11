import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY } from "../actions/cart";
import CartItem from '../../models/cart-item';
import { ADD_ORDER } from "../actions/orders";
import { DELETE_PRODUCT } from "../actions/products";
import { ADD_ADDRESS } from "../actions/cart";

const initialState = {
    items: [],
    totalAmount: 0,
   
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.Price;
            const prodTitle = addedProduct.Title;
            const prodImage = addedProduct.Image;

            let UpdatedOrNewCartItem;

            if (state.items[addedProduct.id]) {
                UpdatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    prodImage,
                    state.items[addedProduct.id].sum + prodPrice
                );
            } else {
                UpdatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodImage, prodPrice);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: UpdatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice,
            };


        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQty > 1) {
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.productImage,
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updatedCartItems = { ...state.items, [action.pid]: updatedCartItem }
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.pid]
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            }

        case ADD_QUANTITY:
            const cartItems = state.items[action.pid];
            const qty = cartItems.quantity;
            let updatedCartItemsQty;
            if (qty >= 1) {
                const updatedCartItemQty = new CartItem(
                    cartItems.quantity + 1,
                    cartItems.productPrice,
                    cartItems.productTitle,
                    cartItems.productImage,
                    cartItems.sum - cartItems.productPrice
                );
                updatedCartItemsQty = { ...state.items, [action.pid]: updatedCartItemQty }
            } else {
                updatedCartItemsQty = { ...state.items };
               
            }
            return {
                ...state,
                items: updatedCartItemsQty,
                totalAmount: state.totalAmount + cartItems.productPrice
            }

        case ADD_ORDER:
            return initialState;



         

        case DELETE_PRODUCT:
            if (!state.items[action.pid]) {
                return state;
            }
            const updatedItems = { ...state.items };
            const itemTotal = state.items[action.pid].sum
            delete updatedItems[action.pid]
            return {
                ...state,
                items: updatedItems,
                totalAmount: state.totalAmount - itemTotal
            }
    }
    return state;
}