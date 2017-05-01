import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  componentWillReceiveProps(nextProps) {
    this._onAuthComplete(nextProps);
  }

  _onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    );
  }
}

function mapStateToProps({ auth: {token} }) {
  return { token }
}

export default connect(mapStateToProps, actions)(AuthScreen);
