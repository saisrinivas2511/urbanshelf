import React, {useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductById} from '../Redux/Slices/ProductInfo';
import {
  FilledButton,
  TransparentButton,
  BackButton,
} from '../Components/Buttons';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import Rating from '../Components/Rating';
import {BlackCartIcon} from '../Components/Cart';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../Constants/COLORS';

const ProductDetails = ({route}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const {productId} = route.params;
  console.log('this is proID', productId);

  const dispatch = useDispatch();

  const fetchProductData = () => {
    if (productId) {
      dispatch(fetchProductById({id: productId}));
    }
  };

  const productDetails = useSelector(
    state => state.ProductInfo.selectedProduct,
  );

  useEffect(() => {
    fetchProductData();
  }, []);

  console.log('this is product details', productDetails);
  console.log('this is images', productDetails.images);

  const navigation = useNavigation();

  const renderImageItem = ({item}) => {
    return <Image style={styles.carouselImage} source={{uri: item}} />;
  };
  const handlePageChange = index => {
    setCurrentPage(index);
  };
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <BackButton onPress={() => navigation.goBack()} />
        <BlackCartIcon quantity={3} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{productDetails?.title}</Text>

        <Rating value={productDetails.rating} size={16} />
        <Text style={styles.rating}>{productDetails?.rating}</Text>
        <View style={styles.imageContainer}>
          {productDetails?.images && (
            <FlatList
              data={productDetails.images}
              renderItem={renderImageItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              onScroll={e => {
                const offset = e.nativeEvent.contentOffset.x;
                const index = Math.round(offset / SCREEN_WIDTH);
                handlePageChange(index);
              }}
              snapToInterval={SCREEN_WIDTH} // Set the width of each item
              decelerationRate="fast"
            />
          )}
        </View>
        <View style={styles.paginationContainer}>
          {productDetails?.images &&
            productDetails.images.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.paginationTile,
                  {backgroundColor: index === currentPage ? COLORS.yellow : 'gray'},
                ]}
              />
            ))}
        </View>
        <View style={{flexDirection: 'row', gap: 50, marginTop: 20}}>
          <Text style={styles.price}>{`$${productDetails?.price}`}</Text>
          <View style={styles.discountPercentageContainer}>
            <Text
              style={
                styles.discountPercentageText
              }>{`$${productDetails.discountPercentage} OFF`}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <TransparentButton
          title="Add To Cart"
          onPress={() => {
            console.log('hello');
          }}
        />
        <FilledButton title="Buy Now" onPress={() => console.log('hello')} />
      </View>
      <Text style={styles.detailsText}>Details</Text>
      <Text style={styles.description}>{productDetails?.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Manrope-Bold',
    color: '#1E222B',
  },
  brand: {
    fontSize: 16,
    color: 'gray',
  },
  category: {
    fontSize: 16,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    margin: 8,
    marginBottom:30
  },
  price: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    marginTop: 8,
    color: '#2A4BA0',
  },
  stock: {
    fontSize: 16,
    marginTop: 8,
  },
  rating: {
    fontSize: 16,
    marginTop: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountPercentageContainer: {
    padding: 5,
    marginTop: 8,
    width: 90,
    height: 30,
    backgroundColor: '#2A4BA0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountPercentageText: {
    color: 'white',
    fontFamily: 'Manrope-SemiBold',
  },
  carouselImage: {
    width: SCREEN_WIDTH, // Adjust the width and height as needed
    height: SCREEN_HEIGHT * 0.3,
    resizeMode: 'cover', // or 'contain' based on your design
  },
  detailsText: {
    color: '#1E222B',
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    margin: 8,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft:10,
    marginTop: -15,
  },
  paginationTile: {
  
    width: 28,
    height: 5,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default ProductDetails;
