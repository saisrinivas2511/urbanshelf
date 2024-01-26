import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BagIcon from '../../Assets/Icons/BagIcon';
import {COLORS} from '../../Constants/COLORS';
import {SCREEN_HEIGHT} from '../../Constants/ScreenDimensions';
import {useNavigation} from '@react-navigation/native';
// import {navigate} from '../utils/navigationUtils';

export const CartIcon = ({quantity}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
      <BagIcon height={20} width={20} />

      {quantity === 0 ? null : (
        <View style={styles.circle}>
          <Text style={styles.bagQuantityText}>{quantity}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export const BlackCartIcon = ({quantity}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
      <BagIcon height={20} width={20} color={'black'} />

      {quantity === 0 ? null : (
        <View style={styles.whiteCircle}>
          <Text style={styles.bagQuantityText}>{quantity}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

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
  whiteCircle: {
    marginTop: SCREEN_HEIGHT * 0.05,
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.gray1,
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
