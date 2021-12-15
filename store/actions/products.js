import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../../models/product'
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const FILTERED_PRODUCTS = 'FILTERED_PRODUCTS';
// export const CREATE_PRODUCT = 'CREATE_PRODUCT';
// export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const getProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
})

export const fetchProducts = () => {
  return async function (dispatch) {

    await firestore().collection('ProductsMobile').onSnapshot((querySnapshot) => {
      const products = []
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id })
      })
      const loadedProducts = [];
      for (const key in products) {
        loadedProducts.push(new Product(key, 'u1', products[key].Product_Name, products[key].Product_Group, products[key].Title, products[key].Description, products[key].Price, products[key].Image))
      }

      dispatch(getProducts(loadedProducts))
      // console.log('products', products)


      // if (!data.ok) {
      //   throw new Error('something is wrong')
      // }
    })

  }
}




export const deleteProduct = productId => {
  return { type: DELETE_PRODUCT, pid: productId };
};

// export const createProduct = (Title, Description, Image, Price) => {
//   return {
//     type: CREATE_PRODUCT,
//     productData: {
//       Title,
//       Description,
//       Image,
//       Price
//     }
//   };
// };

// export const updateProduct = (id, Title, Description, Image) => {
//   return {
//     type: UPDATE_PRODUCT,
//     pid: id,
//     productData: {
//       Title,
//       Description,
//       Image,
//     }
//   };
// };

