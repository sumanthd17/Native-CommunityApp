import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native'
import Login from './scenes/Authentication/Login'

export default class App extends Component {
  render() {
    return(
      <Login />
    )
  }
}
