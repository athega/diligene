import React from 'react-native';
const { TabBarIOS, AsyncStorage } = React;

import Challenges from './Challenges';
import Friends from './Friends';
import Welcome from './Welcome';

import { STATUS_LOGGEDIN_KEY } from './constants/storage.js';

import challengeIco from './img/challenge2.png';
import friendsIco from './img/friends2.png';

export default class TabBar extends React.Component {
  static propTypes = {
    style: React.PropTypes.number,
  };

  state = {
    selectedTab: 'welcomeTab',
  };

  componentDidMount() {
    this._loadState().done();
  }

  async _loadState() {
    try {
      const status = await AsyncStorage.getItem(STATUS_LOGGEDIN_KEY);
      if (status !== null && status === 'yes') {
        this.setState({ isLoggedIn: status, selectedTab: 'challengesTab' });
      }
    } catch (error) {
      alert(`AsyncStorage error: ${error.message}`);
    }
  }

  /* eslint react/jsx-no-bind: 0 */
  render() {
    return (
      <TabBarIOS tintColor="black" style={this.props.style}>
        <TabBarIOS.Item icon={challengeIco} title="Challenges"
          selected={this.state.selectedTab === 'challengesTab'}
          onPress={() => { this.setState({ selectedTab: 'challengesTab' }); }}
        >
          <Challenges/>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={friendsIco} title="Friends"
          selected={this.state.selectedTab === 'friendsTab'}
          onPress={() => { this.setState({ selectedTab: 'friendsTab' }); }}
        >
          <Friends/>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={friendsIco} title="Welcome"
          selected={this.state.selectedTab === 'welcomeTab'}
          onPress={() => { this.setState({ selectedTab: 'welcomeTab' }); }}
        >
          <Welcome/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
