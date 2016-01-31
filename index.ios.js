import React from 'react-native';
import TabBar from './TabBar';

const {
  AppRegistry,
  StyleSheet,
  View,
} = React;

const styles = StyleSheet.create(require('./styles.js'));

class Diligene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar style={styles.tabBar}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('diligene', () => Diligene);
