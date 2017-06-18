import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native'

import Login from './scenes/Authentication/Login'
import SocialAuth from './scenes/Authentication/SocialAuth'
import Register from './scenes/Authentication/Register'
import Profile from './scenes/Profile'
import Discover from './scenes/Discover/Discover'
import PageControl from './scenes/PageControl/PageControl'
import { Router, Scene } from 'react-native-router-flux'

export default class App extends Component {
  render() {
    return(
      /*<Router>
        <Scene key={'root'}>
          <Scene
            key={'login'}
            component={SocialAuth}
            initial={true}
            hideNavBar={true}
          />
          <Scene
            key={'register'}
            component={Register}
          />
          <Scene
            key={'pagecontrol'}
            component={PageControl}
          />
        </Scene>
      </Router>*/
      <Discover />
    )
  }
}
