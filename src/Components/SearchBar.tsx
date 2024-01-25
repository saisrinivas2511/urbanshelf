import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/COLORS';
import SearchIcon from '../../Assets/Icons/SearchIcon';
import {SCREEN_WIDTH} from '../../Constants/ScreenDimensions';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <SearchIcon />

      <TextInput
        style={styles.input}
        placeholderTextColor={COLORS.greyText}
        placeholder="Search Products or store"
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.blue2,
    borderRadius: 28,
    padding: 10,
  },
  input: {
    height: 40,
    width: SCREEN_WIDTH * 0.7,
    color: COLORS.white,
    paddingHorizontal: 10,
    fontFamily: 'Manrope-Medium',
  },
});

export default SearchBar;
