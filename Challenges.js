import React from 'react-native';
const { StyleSheet, View, Text } = React;
const styles = StyleSheet.create(require('./styles.js'));

import Challenge from './Challenge/Challenge';

const MOCKED_DATA = {
  activeChallenges: [
    {
      id: 123,
      name: 'LLL 2016 Challenge',
      fineAmount: 1000,
      fineCurrency: 'kr',
      members: [
        {
          email: 'louise.lizell@gmail.com',
          name: 'Louise Lizell',
          activities: {

          },
        },
        {
          email: 'louise.hamilton.se@gmail.com',
          name: 'Louise Hamilton',
        },
        {
          email: 'charlotte.nyman80@gmail.com',
          name: 'Lotta Nyman',
        },
      ],
    },
  ],
};

export default class Challenges extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeChallenges: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ activeChallenges: MOCKED_DATA.activeChallenges });
  }

  renderCreate() {
    return (<Text style={styles.instructions}>You do not have any active challenges.</Text>);
  }

  renderChallenges() {
    const activeChallenges = this.state.activeChallenges;
    let key = 1;

    return (
      <View>
        { activeChallenges.map(challenge => <Challenge challenge={challenge} key={`c${key++}`}/>) }
      </View>
    );
  }

  render() {
    const activeChallenges = this.state.activeChallenges;
    return (
      <View style={styles.challenges}>
        { activeChallenges && activeChallenges.length > 0
          ? this.renderChallenges()
          : this.renderCreate()
        }
      </View>
    );
  }
}
