import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {COLORS} from '../../Constants/COLORS';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants/ScreenDimensions';

interface FilledButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const FilledButton: FC<FilledButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.filledButton} onPress={onPress}>
      <Text style={styles.filledButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const TransparentButton: FC<FilledButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.transparentButton} onPress={onPress}>
      <Text style={styles.transparentButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  filledButton: {
    backgroundColor: COLORS.blue1,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: SCREEN_HEIGHT * 0.075,
    width: SCREEN_WIDTH * 0.45,
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: SCREEN_HEIGHT * 0.075,
    width: SCREEN_WIDTH * 0.45,
    borderColor: COLORS.blue1,
    borderWidth: 1,
  },
  filledButtonText: {
    fontFamily: 'Manrope-SemiBold',
    color: '#fff',
    fontSize: 14,
  },

  transparentButtonText: {
    fontFamily: 'Manrope-SemiBold',
    color: COLORS.blue1,
    fontSize: 14,
  },
});
