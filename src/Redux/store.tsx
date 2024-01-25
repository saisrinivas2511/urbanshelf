import { configureStore } from '@reduxjs/toolkit'
import ProductInfo from './Slices/ProductInfo'

export default configureStore({
  reducer: {
    ProductInfo: ProductInfo,
  }
})