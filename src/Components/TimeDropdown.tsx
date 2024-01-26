import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';
import {COLORS} from '../../Constants/COLORS';
import ArrowIcon from '../../Assets/Icons/ArrowIcon';

interface TimeOption {
  id: number;
  time: string;
}

interface DropdownProps {
  timeOptions: TimeOption[];
}

const defaultTimeOption: TimeOption = {
  id: 1,
  time: '30 mins',
};

const TimeDropdown: React.FC<DropdownProps> = ({timeOptions}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<TimeOption | null>(
    defaultTimeOption,
  );

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectTime = (timeOption: TimeOption) => {
    setSelectedTime(timeOption);
    setIsOpen(false);
  };

  return (
    <View>
      <Text
        style={{color: COLORS.gray1, fontFamily: 'Manrope-Bold', marginTop: 5}}>
        WITHIN
      </Text>
      <TouchableOpacity onPress={handleToggleDropdown}>
        {selectedTime && (
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontFamily: 'Manrope-Medium', color: COLORS.gray1}}>
              {selectedTime.time}
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
            data={timeOptions}
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
                  onPress={() => handleSelectTime(item)}>
                  <Text
                    style={{
                      fontFamily: 'Manrope-SemiBold',
                      margin: 5,
                      color: COLORS.white,
                    }}>
                    {item.time}
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

export default TimeDropdown;
