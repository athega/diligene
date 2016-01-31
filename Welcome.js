import React from 'react-native';
import Login from './Login';

import bgImg from './img/running.jpg';

const {
  StyleSheet,
  Text,
  View,
  Animated,
} = React;

const styles = StyleSheet.create(require('./styles.js'));

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.2);
    Animated.spring(
      this.state.bounceValue,
      { toValue: 1,
        friction: 10,
      }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image source={bgImg}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            width: null,
            height: null,
            transform: [{ scale: this.state.bounceValue }],
          }}
        >
          <Text style={styles.welcome}>
            Welcome to Diligene
          </Text>
          <Text style={styles.tagline}>
            Challenge your friends – diligence pays off!
          </Text>
          <Text style={styles.instructions}>
            To get started, log in with your{'\n'}
            Facebook account.
          </Text>
          <Text style={styles.instructions}>
            Create a challenge and add your friends.
          </Text>
          <Login style={styles.loginContainer}/>
        </Animated.Image>
      </View>
    );
  }
}
