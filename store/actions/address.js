import firestore from '@react-native-firebase/firestore';

export const ADD_ADDRESS = 'ADD_ADDRESS';
export const GET_ADDRESS = 'GET_ADDRESS';

export const addAddress = (addresses) => {
    const date = new Date()
    const addUserAddress = () => ({
        type: ADD_ADDRESS,
        payload: { 
            address :addresses
        }
    })
    return function (dispatch) {
        firestore().collection('address').add({date,addresses}).then(() => {
            console.log('address added !');
          });
        dispatch(addUserAddress(addresses))
        
    }
}
const getAddress= (address) => ({
    type: GET_ADDRESS,
    address: address
  })
  

export const fetchAddress = () => {
    return async function (dispatch) {
  
      await firestore().collection('address').onSnapshot((querySnapshot) => {
        const address = []
        querySnapshot.forEach((doc) => {
            address.push({ ...doc.data(), id: doc.id })
        })
        const loadedProducts = [];
        for (const key in address) {
          loadedProducts.push(address[key].name, address[key].emailId, address[key].phoneNo, address[key].address,address[key].landmark, address[key].city, address[key].state, address[key].pincode).toString();
        }
  
        dispatch(getAddress(loadedProducts))
        // console.log('address+++++', address)
      })
  
    }
  }