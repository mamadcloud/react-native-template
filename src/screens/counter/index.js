import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainContainer from 'components/mainContainer';
import { CustomText } from 'components/text';

import * as counterActions from 'redux-context/actions/counter';

let x = null;

class Counter extends Component {

  _increase() {
    this.props.updateCounter(1);
  }

  _decrease() {
    this.props.updateCounter(-1);
  }

  render() {
    return (
      <MainContainer>
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity 
            onPress={this._increase.bind(this)}
            onLongPress={() => {
              x = setInterval(this._increase.bind(this), 100);
            }}
            onPressOut={() => {
              clearInterval(x);
            }}
            style={{ flex: 1, alignItems: 'flex-end' }}>
            <CustomText>{'+'}</CustomText>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <CustomText style={{ textAlign: 'center', }}>{`${this.props.number}`}</CustomText>
          </View>
          <TouchableOpacity 
            onPress={this._decrease.bind(this)}
            onLongPress={() => {
              x = setInterval(this._decrease.bind(this), 100);
            }}
            onPressOut={() => {
              clearInterval(x);
            }}
            style={{ flex: 1, }}>
            <CustomText>{'-'}</CustomText>
          </TouchableOpacity>
        </View>
      </MainContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, counterActions), dispatch);
}

function mapStateToProps(state) {
  return {
    number: state.counter.number || 0,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);;