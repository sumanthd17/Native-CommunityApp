import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'

import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import _ from 'lodash'

export default class DiscoverListItem extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />

        <TouchableOpacity style={styles.container}>
          <Image style={styles.image} source={require('../../Resourses/fbLogo.png')}/>
          <View style={styles.information}>
            <Text>{_.upperCase(this.props.name)}</Text>
            <Text>{_.upperCase('Runs ' + this.props.env + ' at ' + this.props.pace + 'pace')}</Text>
          </View>
        </TouchableOpacity>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 25,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#2C0F66',
    overflow: 'hidden',
  },
  information: {

  }
})
