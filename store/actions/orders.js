import firestore from '@react-native-firebase/firestore';

export const ADD_ORDER = "ADD_ORDER";




export const addOrder = (cartItems, totalAmount) => {
    const date = new Date()
    const addProduct = () => ({
        type: ADD_ORDER,
        payload: { 
            items: cartItems,
            amount: totalAmount,
            date:new Date().toISOString()
        }
    })
    return function (dispatch) {
        firestore().collection('orders').add({cartItems,totalAmount,date,status : 'Opened'}).then(() => {
            console.log('User added!');
          });
        dispatch(addProduct(cartItems, totalAmount))
        
    }
}
// dispatch(
//     {
//         type: ADD_ORDER,
//         
//     }
// )
