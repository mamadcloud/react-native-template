import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import { CustomText } from 'components/text';

import { globalColors } from 'configs/globalStyles';

const Footer = (props) => {
  const onPress = (props) => {
    props.onPressFooterButton && props.onPressFooterButton();
  }
  
  return (
    <View>
      {props.withFooterButton && 
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 5,
          borderTopWidth: 1,
          borderTopColor: globalColors.greyBorder,
          backgroundColor: globalColors.whiteGeneral,
        }}
        onPress={() => onPress(props)}
        >
        <View style={{
          backgroundColor: globalColors.redMain,
          justifyContent: 'center',
          alignItems: 'center',
          height: 35,
        }}>
          <CustomText style={{ color: globalColors.whiteGeneral, fontSize: 15, fontWeight: 'bold', }}>{props.footerButtonText}</CustomText>
        </View>
      </TouchableOpacity>}
    </View>
  );
};

export default Footer