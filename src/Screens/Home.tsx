import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import {COLORS} from '../../Constants/COLORS';
import SearchBar from '../Components/SearchBar';
import BagIcon from '../../Assets/Icons/bagIcon';
import Dropdown from '../Components/Dropdown';
import CartIcon from '../Components/Cart';

const Home = () => {
  const address = [
    {id: 1, label: 'Green Way 3000, Sylhet'},
    {id: 2, label: 'St Marks Rd, New Hampshire'},
    {id: 3, label: 'Schofields, NSW'},
  ];

  return (
    <View style={{backgroundColor: COLORS.white}}>
      <View
        style={{
          height: SCREEN_HEIGHT * 0.3,
          backgroundColor: COLORS.blue1,
        }}>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            gap: SCREEN_WIDTH * 0.5,
          }}>
          <Text
            style={{
              marginTop: SCREEN_HEIGHT * 0.05,
              marginLeft: SCREEN_WIDTH * 0.03,
              marginBottom: SCREEN_HEIGHT * 0.04,
              fontFamily: 'Manrope-SemiBold',
              fontSize: 22,
              color: COLORS.white,
            }}>
            Hey, Rahul
          </Text>
          {/* <BagIcon /> */}
          <CartIcon quantity={1} />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <SearchBar />
        </View>
        <View style={{marginLeft: SCREEN_WIDTH * 0.1}}>
          <Dropdown addresses={address} />
        </View>
      </View>
    </View>
  );
};

export default Home;
