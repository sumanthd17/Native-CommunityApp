import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import ViewContainer from '../components/ViewContainer';
import StatusbarBackground from '../components/StatusbarBackground';

export default class Discover extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />
        <View style={styles.container}>
          <Text>
            Discover View!
          </Text>
        </View>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  }
});
