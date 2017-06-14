import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import ViewContainer from '../components/ViewContainer';
import StatusbarBackground from '../components/StatusbarBackground';

export default class Discover extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />
        <View>
          <Text>
            Discover View!
          </Text>
        </View>
      </ViewContainer>
    );
  }
}
