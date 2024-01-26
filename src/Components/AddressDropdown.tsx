import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import {COLORS} from '../../Constants/COLORS';
import ArrowIcon from '../../Assets/Icons/ArrowIcon';

interface Address {
  id: number;
  label: string;
}

interface DropdownProps {
  addresses: Address[];
}

const defaultAddress: Address = {
  id: 1, // Provide a default value for id
  label: 'Green Way 3000, Sylhet', // Provide a default value for label
};
const Dropdown: React.FC<DropdownProps> = ({addresses}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(
    defaultAddress,
  );

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectAddress = (address: Address) => {
    setSelectedAddress(address);
    setIsOpen(false);
  };

  return (
    <View>
      <Text
        style={{color: COLORS.gray1, fontFamily: 'Manrope-Bold', marginTop: 5}}>
        DELIVERY TO
      </Text>
      <TouchableOpacity onPress={handleToggleDropdown}>
        {selectedAddress && (
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontFamily: 'Manrope-Medium', color: COLORS.gray1}}>
              {selectedAddress.label}
            </Text>
            <ArrowIcon />
          </View>
        )}
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isOpen}
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: SCREEN_HEIGHT * 0.4,
            width: SCREEN_WIDTH,
            backgroundColor: COLORS.white,
            position: 'absolute',
            bottom: 0,
            paddingVertical: 20,
            borderRadius: 28,
          }}>
          <FlatList
            data={addresses}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: SCREEN_HEIGHT * 0.1,
                    width: SCREEN_WIDTH * 0.9,
                    borderRadius: 20,
                    backgroundColor: COLORS.blue1,
                    margin: 5,
                  }}
                  onPress={() => handleSelectAddress(item)}>
                  <Text
                    style={{
                      fontFamily: 'Manrope-SemiBold',
                      margin: 5,
                      color: COLORS.white,
                    }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;
