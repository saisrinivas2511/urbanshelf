import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Category from '../Screens/Category';
import Favourite from '../Screens/Favourite';
import CategoryFillIcon from '../../Assets/Icons/CategoryFillIcon';
import CategoryIcon from '../../Assets/Icons/CategoryIcon';
import More from '../Screens/More';
import HomeIcon from '../../Assets/Icons/HomeIcon';
import HomeFill from '../../Assets/Icons/HomeFillIcon';
import HeartIcon from '../../Assets/Icons/HeartIcon';
import HeartIconFill from '../../Assets/Icons/HeartFillIcon';
import MoreIconFill from '../../Assets/Icons/MoreIconFill';
import MoreIcon from '../../Assets/Icons/MoreIcon';
import {StatusBar, View, ViewStyle} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import {COLORS} from '../../Constants/COLORS';

interface FocusedViewProps {
  focused: boolean;
}
const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.blue1} />
      <View style={{height: SCREEN_HEIGHT, width: SCREEN_WIDTH}}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? <HomeFill /> : <HomeIcon />;
              } else if (route.name === 'favourite') {
                iconName = focused ? <HeartIconFill /> : <HeartIcon />;
              } else if (route.name === 'Category') {
                iconName = focused ? <CategoryFillIcon /> : <CategoryIcon />;
              } else if (route.name === 'More') {
                iconName = focused ? <MoreIconFill /> : <MoreIcon />;
              }
              const viewStyles: ViewStyle | FocusedViewProps = focused
                ? {
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.activeIconBackground,
                    padding: 10,
                    height: 50,
                    width: 50,
                    marginBottom: SCREEN_HEIGHT * 0.09,
                    borderRadius: 90,
                  }
                : {};

              return <View style={viewStyles}>{iconName}</View>;
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: SCREEN_HEIGHT * 0.09,
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Category" component={Category} />
          <Tab.Screen name="favourite" component={Favourite} />
          <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};
