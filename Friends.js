import React from 'react-native';
const { StyleSheet, View, Text } = React;
const styles = StyleSheet.create(require('./styles.js'));

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.friends}>
        <Text>Friends</Text>
      </View>
    );
  }
}
