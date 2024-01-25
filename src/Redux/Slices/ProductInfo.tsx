import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data;
});

export const fetchProductById = createAsyncThunk(
  'fetchProductById',
  async ({id}: {id: string}) => {
    console.log('this is id in slice', id);
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error in fetchProductById:', error.message);
      throw error; // Rethrow the error to propagate it to the component
    }
  },
);

export const ProductInfo = createSlice({
  name: 'ProductInfo',
  initialState: {
    products: [],
    loading: 'idle',
    error: null,
    selectedProduct: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.products = action.payload;
        console.log('Fetched products:', action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
        console.error('Error fetching products:', action.error.message);
      })
      .addCase(fetchProductById.pending, state => {
        state.loading = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.selectedProduct = action.payload;
        console.log('Fetched product by id:', action.payload);
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
        console.error('Error fetching product by id:', action.error.message);
      });
  },
});

export default ProductInfo.reducer;
