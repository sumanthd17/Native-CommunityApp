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

//import PageControl from 'react-native-page-control';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
//import PageControlIOS from 'react-native-pagecontrol';
import Profile from '../Profile'
import Discover from '../Discover'
//import Icon from 'react-native-vector-icons/FontAwesome';
//const myIcon = (<Icon name="rocket" size={30} color="#900" />)

export default class PageControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'profile',
    }
  };

  render() {
    let myIcon = '../../Resourses/icon2.png';
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
              selected={this.state.selectedTab === 'discover'}
              systemIcon="search"
              onPress={() => {
                this.setState({
                  selectedTab: 'discover'
                });
              }}>
                <Discover />
              </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
