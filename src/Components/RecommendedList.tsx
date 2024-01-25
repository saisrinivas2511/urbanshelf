import React, {useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {SCREEN_HEIGHT} from '../../Constants/ScreenDimensions';
import ProductCard from './ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../Redux/Slices/ProductInfo';

const RecommendedList = () => {
 

  const dispatch = useDispatch();
  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      await dispatch(fetchProducts());
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const productData = useSelector(state => {
    return state.ProductInfo.products.products;
  });

  const loading = useSelector(state => {
    return state.ProductInfo.loading;
  });
  console.log('product in screem', productData);
  const renderItem = ({item}) => <ProductCard item={item} />;

  return (
    <View
      style={{
        height: SCREEN_HEIGHT * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading==='loading' ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          style={{
            height: SCREEN_HEIGHT * 0.5,
            marginBottom: SCREEN_HEIGHT * 0.2,
          }}
          data={productData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} // Assuming each product has a unique id
          numColumns={2}
          initialNumToRender={4}
        />
      )}
    </View>
  );
};

export default RecommendedList;
