import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import {COLORS} from '../../Constants/COLORS';
import SearchBar from '../Components/SearchBar';
import { CartIcon } from '../Components/Cart';
import Dropdown from '../Components/AddressDropdown';
import TimeDropdown from '../Components/TimeDropdown';
import OfferFlatlist from '../Components/offersflatlist';
import RecommendedList from '../Components/RecommendedList';

const Home = () => {
  const address = [
    {id: 1, label: 'Green Way 3000, Sylhet'},
    {id: 2, label: 'St Marks Rd, New Hampshire'},
    {id: 3, label: 'Schofields, NSW'},
  ];

  const time = [
    {id: 1, time: '30 mins'},
    {id: 2, time: '15 mins'},
    {id: 3, time: '10 mins'},
  ];
  return (
    <>
      <View style={{backgroundColor:'white'}}>
        <View style={styles.Header}>
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
          <View
            style={{
              marginLeft: SCREEN_WIDTH * 0.04,
              marginRight: SCREEN_WIDTH * 0.04,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Dropdown addresses={address} />
            <TimeDropdown timeOptions={time} />
          </View>
        </View>
        <OfferFlatlist />
        <Text style={styles.title}>Recommended</Text>
      </View>
      <View style={{height: SCREEN_HEIGHT * 0.5  }}>
        <RecommendedList />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Header: {
    height: SCREEN_HEIGHT * 0.3,
    backgroundColor: COLORS.blue1,
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontSize: 30,
    color: COLORS.black1,
    marginLeft: SCREEN_WIDTH * 0.045,
  },
  condition: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 13,
    color: COLORS.white,
  },
});
