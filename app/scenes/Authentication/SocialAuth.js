import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import { firebaseRef, provider } from '../../Services/Firebase'
import { styles } from './styles'

export default class SocialAuth extends Component {
  render() {
    let pic = {
      uri: 'https://n7best.gitbooks.io/react-weui-docs/content/logo.png'
    };
    return (
      <ViewContainer>
        <StatusbarBackground />

        <View style={styles.logo}>
          <Image source={pic} style={{width: 250, height: 250}}/>
        </View>

        <View style={styles.social}>
          <TouchableOpacity style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={require('../../Resourses/fbLogo.png')} style={{height: 50, width: 50}}/>

            <Text style={styles.socialText}>Continue With Facebook</Text>
          </TouchableOpacity>
        </View>

      </ViewContainer>
    );
  }
}
