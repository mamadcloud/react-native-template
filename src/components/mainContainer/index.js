import React, { Component } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import Header from './header';
import Footer from './footer';
import { mainStyle } from './styles';
import { CustomText } from 'components/text';

class MainContainer extends Component {
  state = {
    doneButtonBottom: 0,
  }

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.isMount = true;
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
  }

  componentWillUnmount() {
    this.isMount = false;
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  safeSetState(props) {
    if(!this.isMount) {
      return;
    }

    this.setState(props);
  }

  keyboardWillShow(e) {
    this.safeSetState({doneButtonBottom: e.endCoordinates.height})
  }

  keyboardWillHide(e) {
    this.safeSetState({doneButtonBottom: 0})
  }

  render() {
    return (
      <View style={[ mainStyle.container, this.props.mainStyles ]}>
        {!this.props.hideNavBar && <Header {...this.props} />}
        <View style={[ { flex: 1 }, this.props.contentStyles ]}>
          {this.props.children}
        </View>
        <Footer {...this.props} {...this.state} />
        {this.props.screenModal && this.props.screenModal()}
        {(this.state.doneButtonBottom > 0 && !this.props.childContext) && 
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}>
          <View style={[mainStyle.doneButtonWrapper, { bottom: this.state.doneButtonBottom, }]}>
            <CustomText style={mainStyle.doneButtonText}>{'Done'}</CustomText>
          </View>
        </TouchableWithoutFeedback>}
      </View>
    );
  };
}

export default MainContainer;