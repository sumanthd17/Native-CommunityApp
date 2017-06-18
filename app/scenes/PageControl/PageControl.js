import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TabBarIOS,
  AppRegistry,
  Icon,
} from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import Profile from '../Profile'
<<<<<<< HEAD
import Discover from '../Discover/Discover'
=======
import Discover from '../Discover'
>>>>>>> 7730c9996443ac23bb00a0dce388dc05102f55fb
import Search from '../Search'

export default class PageControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'search',
    }
  };

  render() {
    return(
    <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'profile'}
          systemIcon="favorites"
          onPress={() => {
            this.setState({
              selectedTab: 'profile'
            });
          }}>
            <Profile />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            selected={this.state.selectedTab === 'discover'}
            systemIcon="most-viewed"
            onPress={() => {
              this.setState({
                selectedTab: 'discover'
              });
            }}>
              <Discover />
            </TabBarIOS.Item>

            <TabBarIOS.Item
              selected={this.state.selectedTab === 'search'}
              systemIcon="search"
              onPress={() => {
                this.setState({
                  selectedTab: 'search'
                });
              }}>
                <Search />
              </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
