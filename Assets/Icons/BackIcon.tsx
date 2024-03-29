import * as React from 'react';
import {View} from 'react-native';
import Svg, {G, Circle, Path} from 'react-native-svg';
import { SCREEN_HEIGHT } from '../../Constants/ScreenDimensions';
const BackIcon = (props: any) => (
  <View style={{marginTop: SCREEN_HEIGHT * 0.05}}>
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G id="Group 82">
        <Circle id="Ellipse 134" cx={20} cy={20} r={20} fill="#F8F9FB" />
        <Path
          id="Fill 4"
          d="M22.2506 15.5572C22.0596 15.5572 21.8676 15.6302 21.7216 15.7762L18.2346 19.2462C18.0936 19.3872 18.0146 19.5782 18.0146 19.7782C18.0146 19.9772 18.0936 20.1682 18.2346 20.3092L21.7216 23.7812C22.0146 24.0732 22.4886 24.0732 22.7816 23.7792C23.0736 23.4852 23.0726 23.0102 22.7796 22.7182L19.8266 19.7782L22.7796 16.8382C23.0726 16.5462 23.0736 16.0722 22.7816 15.7782C22.6356 15.6302 22.4426 15.5572 22.2506 15.5572Z"
          fill="#1E222B"
        />
      </G>
    </Svg>
  </View>
);
export default BackIcon;
