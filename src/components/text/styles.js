import { StyleSheet } from 'react-native';

import { globalColors } from 'configs/globalStyles';

const text = {
  fontSize: 15,
  color: globalColors.black,
};

const textStyles = StyleSheet.create({
  text: {
    ...text,
  },
});

const textInputStyles = StyleSheet.create({
  text: {
    ...text,
  },
});

export {
  textStyles,
  textInputStyles,
}