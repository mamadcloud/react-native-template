import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';

import LinkerRouter from 'components/linkerRouter';

import configStore from 'configs/configStore';
import scenes from 'configs/configRoute';
import { globalColors } from 'configs/globalStyles';

let store = null;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.init();
  }

  async init() {
    store = configStore({ });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: globalColors.white, }}>
        <Provider store={store}>
            <LinkerRouter scenes={scenes} scheme={'ReactNativeTemplate'} />
        </Provider>
      </SafeAreaView>
    );
  }
}
