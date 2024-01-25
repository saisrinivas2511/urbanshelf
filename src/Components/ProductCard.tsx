import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../Constants/COLORS';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import FavouritesIcon from '../../Assets/Icons/FavouritesIcon';
import FavouritesFillIcon from '../../Assets/Icons/FavouritesFillIcon';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({item}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const navigateToProductDetails = () => {
    navigation.navigate('ProductDetails', { productId: item.id }); // Pass any necessary data to ProductDetails screen
  };
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
      <TouchableOpacity
        onPress={navigateToProductDetails}>
        <TouchableOpacity
          style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}
          onPress={toggleFavourite}>
          <View>
            {isFavourite ? <FavouritesFillIcon /> : <FavouritesIcon />}
          </View>
        </TouchableOpacity>
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
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
