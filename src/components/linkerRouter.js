import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import crossroads from 'crossroads';

class LinkerRouter extends Component {
  constructor(props) {
    super(props);

    this.handleOpenURL = this.handleOpenURL.bind(this);
  }

  componentDidMount() {
    this.initUrl();
    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  initUrl() {
    Linking.getInitialURL()
      .then(url => this.handleOpenURL({ url }))
      .catch(console.error);
  }

  handleOpenURL(event) {
    if (
      event.url &&
      event.url.indexOf(this.props.scheme + '://') === 0
    ) {
      crossroads.parse(event.url.slice(this.props.scheme.length + 3));
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.scenes(this.props)}
      </View>
    );
  }
}

export default LinkerRouter;
