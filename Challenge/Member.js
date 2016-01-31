'use strict';

import React from 'react-native';
const { StyleSheet, View, Text } = React;
const styles = StyleSheet.create(require('../styles.js'));

export default class Member extends React.Component {
  render() {
  	const { name } = this.props.member;
    return (
      <View>
        <Text style={styles.memberName}>{name}</Text>
      </View>
    );
  }
}
