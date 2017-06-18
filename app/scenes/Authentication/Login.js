import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'

import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import { styles } from './styles'
import { firebaseRef } from '../../Services/Firebase'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this._login = this._login.bind(this)

  }

  _login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
    console.log(error.code)
    console.log(error.message)
    });
    Actions.pagecontrol()
  }

  _register() {
    Actions.register()
  }

  render() {
    let pic = {
      uri: 'https://n7best.gitbooks.io/react-weui-docs/content/logo.png'
    };
    return(
      <ViewContainer>
        <StatusbarBackground />

          <View style={styles.logo}>
            <Image source={pic} style={{width: 250, height: 250}}/>
          </View>

          <View style={{padding: 20}}>
            <TextInput
              style={styles.textInput}
              placeholder="EMAIL"
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
              autoCorrect={false}
              returnKeyType="next"
            />
            <View style={styles.line} />
            <TextInput
                style={styles.textInput}
                placeholder="PASSWORD"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                autoCorrect={false}
                returnKeyType="go"
            />
            <View style={styles.line} />
          </View>
          <View style={styles.inputButtons}>
            <View style={styles.login}>
                <TouchableOpacity style={styles.loginButton} onPress={this._login}>
                  <Text style={styles.loginButtonText}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.register}>
                <TouchableOpacity style={styles.registerButton} onPress={this._register}>
                  <Text style={styles.registerButtonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
          </View>
      </ViewContainer>
    )
  }
}
