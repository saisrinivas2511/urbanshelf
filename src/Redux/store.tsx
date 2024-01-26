import {configureStore} from '@reduxjs/toolkit';
import ProductInfo from './Slices/ProductInfo';
import cartReducer from './Slices/CartSlice';

export default configureStore({
  reducer: {
    ProductInfo: ProductInfo,
    cart: cartReducer,
  },
});
