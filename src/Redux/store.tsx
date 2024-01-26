import {configureStore} from '@reduxjs/toolkit';
import ProductInfo from './Slices/ProductInfo';
import cartReducer from './Slices/CartSlice';
import favouriteReducer from './Slices/FavouritesSlice'

export default configureStore({
  reducer: {
    ProductInfo: ProductInfo,
    cart: cartReducer,
    favourites:favouriteReducer
  },
});
