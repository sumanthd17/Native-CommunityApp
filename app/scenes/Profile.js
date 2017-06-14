import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native'


import  ViewContainer from '../components/ViewContainer'
import  StatusbarBackground from '../components/StatusbarBackground'

export default class Profile extends Component {
  render() {
    let pic = {
      uri: 'https://n7best.gitbooks.io/react-weui-docs/content/logo.png'
    };
    return(
      <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
        <StatusbarBackground />

        <View style={styles.profilePicture}>
          <Image source={pic} style={{width: 110, height: 110}}/>
        </View>

        <View style={styles.name}>
          <Text style={styles.nameText}>Sumanth Doddapaneni</Text>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>This is my description!</Text>
        </View>

        <View style={styles.bio}>
          <Text style={styles.bioText}>This is my bio!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    nameText: {
      color: 'purple',
    },
    profilePicture: {
      borderWidth: 1,
      borderColor: '#2C0F66',
      height: 110,
      width: 110,
      borderRadius: 55,
      overflow: 'hidden'
    }
})
