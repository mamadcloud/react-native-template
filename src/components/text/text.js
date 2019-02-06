import React from 'react';
import {
  Text,
} from 'react-native';

import { textStyles } from './styles';

const CustomText = (props) => {
  return (
    <Text {...props} ref={ref => props.setRef && props.setRef(ref)} style={[textStyles.text, props.style]} />
  );
}

export default CustomText;