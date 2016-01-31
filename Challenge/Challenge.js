import React from 'react-native';
const { StyleSheet, View, Text } = React;
const styles = StyleSheet.create(require('../styles.js'));

import Member from './Member';

export default class Challenge extends React.Component {
  static propTypes = {
    challenge: React.PropTypes.object.isRequired,
  };

  render() {
    const { name, fineAmount, fineCurrency, members } = this.props.challenge;
    let key = 1;

    return (
      <View>
        <View style={styles.challenge}>
          <Text style={styles.challengeName}>{name}</Text>
          { members.map(member => <Member member={member} key={`m${key++}`}/>) }
        </View>
        <View style={styles.challengeFineBox}>
          <Text style={styles.challengeFine}>Fine: {fineAmount} {fineCurrency}</Text>
        </View>
      </View>
    );
  }
}
