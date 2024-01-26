import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProductById: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.products.findIndex(
        product => product.id === action.payload,
      );

      if (indexToRemove !== -1) {
        state.products.splice(indexToRemove, 1);
      }
    },
  },
});

export const {addProduct, removeProductById, removeProduct} = cartSlice.actions;

export default cartSlice.reducer;
