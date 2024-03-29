import * as React from 'react';
import {Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
const HomeIcon = (props: any) => (
  <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.9532 22.1164L12 22.1194L12.0468 22.1164L17.279 21.7894C19.6517 21.6411 21.4997 19.6728 21.4983 17.2955L21.4947 11.3105C21.4941 10.1652 21.0566 9.06315 20.2716 8.22908L15.2709 2.91585C13.4942 1.02805 10.4939 1.02805 8.71714 2.91586L3.7231 8.22203C2.93746 9.05677 2.5 10.1599 2.5 11.3062V17.2981C2.5 19.6744 4.34764 21.6411 6.7193 21.7893L11.9532 22.1164Z"
        stroke="#3E4554"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M11.9532 22.1164L12 22.1194L12.0468 22.1164L17.279 21.7894C19.6517 21.6411 21.4997 19.6728 21.4983 17.2955L21.4947 11.3105C21.4941 10.1652 21.0566 9.06315 20.2716 8.22908L15.2709 2.91585C13.4942 1.02805 10.4939 1.02805 8.71714 2.91586L3.7231 8.22203C2.93746 9.05677 2.5 10.1599 2.5 11.3062V17.2981C2.5 19.6744 4.34764 21.6411 6.7193 21.7893L11.9532 22.1164Z"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
    <Text style={{fontFamily: 'Manrope-Medium'}}>Home</Text>
  </View>
);
export default HomeIcon;
