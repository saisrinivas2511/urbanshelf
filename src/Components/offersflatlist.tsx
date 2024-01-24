import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../Constants/COLORS';
import {SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import ImageIcon from '../../Assets/Icons/ImageIcon';
const offers = [
  {
    id: 1,
    title: '50% OFF',
    catchword: 'Get',
    condition: 'On first 03 order',
  },
  {
    id: 2,
    title: ' 20% OFF',
    catchword: 'Flat',
    condition: 'On first Your order',
  },
  {
    id: 3,
    title: ' 25% OFF ',

    catchword: 'Get',
    condition: 'On Referring A Friend',
  },
];

type ItemProps = {title: string};
interface OfferProps {
  catchword: string;
  title: string;
  condition: string;
}
const Item = (props: OfferProps) => (
  <View style={styles.item}>
    <ImageIcon />
    <View>
      <Text style={styles.catchword}>{props.catchword}</Text>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.condition}>{props.condition}</Text>
    </View>
  </View>
);

const OfferFlatlist = () => {
  return (
    <FlatList
      style={{marginTop: 10}}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={offers}
      renderItem={({item}) => (
        <Item
          title={item.title}
          condition={item.condition}
          catchword={item.catchword}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH * 0.7,
    backgroundColor: COLORS.yellow,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontSize: 26,
    color: COLORS.white,
  },
  condition: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 13,
    color: COLORS.white,
  },
  catchword: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 20,
    color: COLORS.white,
  },
});

export default OfferFlatlist;
