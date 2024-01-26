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

interface FavouritesState {
  products: Product[];
}

const initialState: FavouritesState = {
  products: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeFromFavourites: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const {addToFavourites, removeFromFavourites} = favouritesSlice.actions;

export default favouritesSlice.reducer;
