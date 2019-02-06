import React from 'react';
import {
  TextInput,
} from 'react-native';

import { textInputStyles } from './styles';

const CustomTextInput = (props) => {
  return (
    <TextInput autoCorrect={false} underlineColorAndroid={'transparent'} {...props} ref={ref => props.setRef && props.setRef(ref)} style={[textInputStyles.text, props.style]} />
  );
}

export default CustomTextInput;
