import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../Constants/COLORS';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import FavouritesIcon from '../../Assets/Icons/FavouritesIcon';
import FavouritesFillIcon from '../../Assets/Icons/FavouritesFillIcon';
import {useNavigation} from '@react-navigation/native';
import {MinusButton, PlusButton} from './Buttons';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct, removeProduct} from '../Redux/Slices/CartSlice';
import {
  addToFavourites,
  removeFromFavourites,
} from '../Redux/Slices/FavouritesSlice';

const ProductCard = ({item}) => {

  const navigation = useNavigation();

  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addProduct(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeProduct(item.id));
  };

  const navigateToProductDetails = () => {
    navigation.navigate('ProductDetails', {productId: item.id});
  };
  const cartProducts = useSelector(state => state.cart.products);

  const isInCart = cartProducts.some(product => product.id === item.id);

  const favourites = useSelector(state => state.favourites.products);

  const handleAddToFavourites = () => {
    dispatch(addToFavourites(item));
  };

  const handleRemoveFromFavourites = () => {
    dispatch(removeFromFavourites(item.id));
  };

  const isProductInFavourites = favourites.some(
    favProduct => favProduct.id === item.id,
  );
 
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 12,
        elevation: 3,
        margin: 20,
        height: SCREEN_HEIGHT * 0.3,
        width: SCREEN_WIDTH * 0.4,
      }}>
      <TouchableOpacity onPress={navigateToProductDetails}>
        {isProductInFavourites ? (
          <TouchableOpacity
            style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}
            onPress={handleRemoveFromFavourites}>
            <FavouritesFillIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}
            onPress={handleAddToFavourites}>
            <FavouritesIcon />
          </TouchableOpacity>
        )}
        <Image
          source={{uri: item.thumbnail}}
          style={{
            width: '100%',
            height: '65%',
            resizeMode: 'cover',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            marginBottom: 10,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{padding: 7}}>
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
                fontSize: 16,
                color: COLORS.black1,
              }}>
              ${item.price}
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
                fontSize: 12,
                color: COLORS.productDetails,
              }}>
              {item.title.length > 20
                ? `${item.title.substring(0, 20)}...`
                : item.title}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 25,
              right: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {!isInCart && <PlusButton onPress={handleAddToCart} />}
            {isInCart && (
              <>
                <MinusButton onPress={handleRemoveFromCart} />
                <Text
                  style={{
                    marginLeft: 5,
                    marginRight: 5,
                    color: COLORS.gray,
                    fontSize: 15,
                    fontFamily: 'Manrope-Regular',
                  }}>
                  {
                    cartProducts.filter(product => product.id === item.id)
                      .length
                  }
                </Text>
                <PlusButton onPress={handleAddToCart} />
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
