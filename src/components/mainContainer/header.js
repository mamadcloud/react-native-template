import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CustomText } from 'components/text';

import { headerStyle } from './styles';

const { width, height } = Dimensions.get('window');

const Header = (props) => {
  return (
    <View style={[ headerStyle.container, props.headerContainerStyles ]}>
      <View style={headerStyle.wrapper}>
        <View style={headerStyle.titleWrapper}>
          <CustomText numberOfLines={1} ellipsizeMode={'tail'} style={[headerStyle.titleText, { textAlign: 'center', width: width * 0.6 }, !props.withBackButton && { marginLeft: 0, }]}>{props.headerTitle}</CustomText>
        </View>
        {!props.hideBackButton && 
          <TouchableOpacity 
            onPress={() => Actions.pop()}
            style={headerStyle.backButton}>
            <CustomText>{'Back'}</CustomText>
          </TouchableOpacity>
        }
        {(props.withRightButton && props.rightButtonElement) && 
          <TouchableOpacity 
            onPress={() => props.onPressRightButton && props.onPressRightButton()}
            style={headerStyle.rightButton}>
            {props.rightButtonElement}
          </TouchableOpacity>
        }
      </View>
    </View>
  );
};

export default Header