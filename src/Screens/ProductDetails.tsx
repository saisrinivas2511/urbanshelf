import { View} from 'react-native'
import React from 'react'
import { FilledButton, TransparentButton } from '../Components/Buttons';

const ProductDetails = () => {
  return (
    <View>
       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TransparentButton
          title="hello"
          onPress={() => {
            console.log('hello');
          }}
        />
        <FilledButton title="hello" onPress={() => console.log('hello')} />
      </View>
    </View>
  )
}

export default ProductDetails