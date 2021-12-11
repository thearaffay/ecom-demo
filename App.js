import React from 'react';
import { createStore, combineReducers,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ProductsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/orders';
import addressReducer from './store/reducers/address';

import thunk from 'redux-thunk'

 const middleware = [thunk]
const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: cartReducer,
  orders: orderReducer,
  address: addressReducer
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  )
}

export default App;
