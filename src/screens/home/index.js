import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions, } from 'react-native-router-flux';

import MainContainer from 'components/mainContainer';
import { CustomText } from 'components/text';

import { globalColors } from 'configs/globalStyles';

import * as homeActions from 'redux-context/actions/home';

class Home extends Component {
  constructor(props) {
    super(props);

    props.getAppName();
  }

  _counterPage() {
    Actions.CounterScreen();
  }

  render() {
    return (
      <MainContainer
        hideBackButton
      >
        <View style={{ alignItems: 'center',  }}>
          <CustomText style={{ textAlign: 'center', }}>{`WELCOME TO ${this.props.name}`}</CustomText>
          <TouchableOpacity 
            style={{ backgroundColor: globalColors.red, padding: 10, marginTop: 10, }}
            onPress={this._counterPage}
          >
            <CustomText style={{ color: globalColors.white, }}>{'COUNTER'}</CustomText>
          </TouchableOpacity>
        </View>
      </MainContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, homeActions), dispatch);
}

function mapStateToProps(state) {
  return {
    name: state.home.name || '',
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);;