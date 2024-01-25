import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { SCREEN_HEIGHT } from '../../Constants/ScreenDimensions';
import ProductCard from './ProductCard';

const RecommendedList = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProductData(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => <ProductCard item={item} />;

  return (
    <View
      style={{
        height: SCREEN_HEIGHT * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          style={{
            height: SCREEN_HEIGHT * 0.5,
            marginBottom: SCREEN_HEIGHT * 0.2,
          }}
          data={productData?.products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Assuming each product has a unique id
          numColumns={2}
          initialNumToRender={4}
        />
      )}
    </View>
  );
};

export default RecommendedList;

