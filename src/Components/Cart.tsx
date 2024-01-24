import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BagIcon from '../../Assets/Icons/bagIcon';
import {COLORS} from '../../Constants/COLORS';
import {SCREEN_HEIGHT} from '../../Constants/ScreenDimensions';
// import {navigate} from '../utils/navigationUtils';

const CartIcon = ({quantity}) => {
  return (
    <TouchableOpacity onPress={() => console.log('hello')}>
      <BagIcon height={20} width={20} />

      {quantity === 0 ? null : (
        <View style={styles.circle}>
          <Text style={styles.bagQuantityText}>{quantity}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  circle: {
    marginTop: SCREEN_HEIGHT * 0.05,
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.blue1,
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 6,
    top: -8,
  },
  bagQuantityText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    fontSize: 10,
    color: COLORS.white,
  },
});
