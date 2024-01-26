import React, {useState} from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../Constants/COLORS';
import {MinusButton, PlusButton, BackButton} from '../Components/Buttons';
import {addProduct, removeProduct} from '../Redux/Slices/CartSlice';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CartScreen = () => {
  const cartProducts = useSelector(state => state.cart.products);
  const [editMode, setEditMode] = useState(false);

  console.log('this is in cart ', cartProducts);

  const navigation = useNavigation();

  const groupedCartProducts = cartProducts.reduce((acc, product) => {
    const existingProduct = acc.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.count += 1;
    } else {
      acc.push({...product, count: 1});
    }
    return acc;
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addProduct(item));
  };

  const handleRemoveFromCart = productId => {
    dispatch(removeProduct(productId));
  };

  const toggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const subtotal = groupedCartProducts.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  // Set Default Delivery Fee
  const deliveryFee = 2;

  // Calculate Total
  const total = subtotal + deliveryFee;

  const renderCartItem = ({item}) => (
    <View style={styles.card}>
      <Image style={styles.thumbnail} source={{uri: item.thumbnail}} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.cartAdjuster}>
        <>
          <MinusButton
            onPress={() => handleRemoveFromCart(item.id)}
            disabled={!editMode} // Disable the button in edit mode
          />
          <Text
            style={{
              marginLeft: 5,
              marginRight: 5,
              color: COLORS.gray,
              fontSize: 15,
              fontFamily: 'Manrope-Regular',
            }}>
            {cartProducts.filter(product => product.id === item.id).length}
          </Text>
          <PlusButton
            onPress={() => handleAddToCart(item)}
            disabled={!editMode} // Disable the button in edit mode
          />
        </>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      {cartProducts.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Image
            source={require('../../Assets/Images/EmptyCart.jpg')}
            style={styles.emptyCartImage}
          />
          <Text style={styles.emptyCartText}>
            Uh-Oh ! Looks Like Your Cart Is Empty
          </Text>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            style={{marginBottom: SCREEN_HEIGHT * 0.4}}
            data={groupedCartProducts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderCartItem}
          />
          <Text style={styles.editText} onPress={toggleEditMode}>
            {editMode ? 'Done' : 'Edit'}
          </Text>
          <View
            style={{
              backgroundColor: '#E7ECF0',
              margin: 10,
              height: SCREEN_HEIGHT * 0.4,
              width: SCREEN_WIDTH * 0.95,
              position: 'absolute',
              bottom: -50,
              borderRadius: 30,
              alignItems: 'center',
              paddingVertical: 20,
              //   paddingHorizontal: 35,
            }}>
            <View style={styles.checkoutContainer}>
              <View style={styles.checkoutRow}>
                <Text style={styles.checkOutLabel}>Subtotal:</Text>
                <Text style={styles.checkOutValue}>${subtotal.toFixed(2)}</Text>
              </View>
              <View style={styles.checkoutRow}>
                <Text style={styles.checkOutLabel}>Delivery:</Text>
                <Text style={styles.checkOutValue}>${deliveryFee}</Text>
              </View>
              <View style={styles.checkoutRow}>
                <Text style={styles.checkOutLabel}>Total:</Text>
                <Text style={styles.checkOutValue}>${total.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.checkOutBtn}>
                <Text style={styles.checkOutBtnText}>Proceed To Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderTopColor: '#C5CDD2',
    borderColor: 'transparent',
    padding: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  thumbnail: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 5,
  },
  details: {
    flex: 1,
  },
  title: {
    color: '#1E222B',
    fontSize: 14,
    fontFamily: 'Manrope-SemiBold',
  },
  price: {
    color: '#1E222B',
    fontSize: 14,
    fontFamily: 'Manrope-Regular',
  },
  cartAdjuster: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
  },
  editText: {
    color: '#1E222B',
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.36,
    right: 30,
  },
  checkOut: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: '#616A7D',
    marginBottom: 13,
  },
  checkOutBtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: COLORS.white,
  },
  checkoutContainer: {
    backgroundColor: '#E7ECF0',
    margin: 10,
    borderRadius: 30,

    paddingVertical: 20,
  },

  checkoutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  checkOutLabel: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: '#616A7D',
  },
  checkOutValue: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: '#616A7D',
  },
  checkOutBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue2,
    borderRadius: 20,
    height: SCREEN_HEIGHT * 0.07,
    width: SCREEN_WIDTH * 0.85,
    // padding:5
  },
  emptyCartContainer: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartImage: {
    width: SCREEN_HEIGHT,
    height: SCREEN_WIDTH,
    resizeMode: 'contain',
  },
  emptyCartText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 20,
  },
});
export default CartScreen;
