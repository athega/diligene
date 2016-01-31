import React from 'react-native';
const { StyleSheet, View, AsyncStorage } = React;
const styles = StyleSheet.create(require('./styles.js'));

import { FBSDKLoginButton } from 'react-native-fbsdklogin';

import { STATUS_LOGGEDIN_KEY } from './constants/storage.js';

export default class Login extends React.Component {
  static propTypes = {
    style: React.PropTypes.number,
  };

  async _saveState(status) {
    this.setState({ isLoggedIn: status });
    try {
      await AsyncStorage.setItem(STATUS_LOGGEDIN_KEY, status);
    } catch (error) {
      alert(`AsyncStorage error: ${error.message}`);
    }
  }

  _onLoginFinished = (error, result) => {
    if (error) {
      alert('Error logging in.');
      this._saveState('no');
    } else {
      if (result.isCancelled) {
        alert('Login cancelled.');
        this._saveState('no');
      } else {
        // Logged in
        this._saveState('yes');
      }
    }
  };

  _onLogoutFinished = () => {
    this._saveState('no');
  };

  render() {
    return (
      <View style={this.props.style}>
        <FBSDKLoginButton
          style={styles.loginButton}
          onLoginFinished={this._onLoginFinished}
          onLogoutFinished={this._onLogoutFinished}
          readPermissions={[]}
          publishPermissions={[]}
        />
      </View>
    );
  }
}
