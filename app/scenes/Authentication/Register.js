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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirm: '',
    }
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
            <TextInput
                style={styles.textInput}
                placeholder="CONFIRM PASSWORD"
                secureTextEntry={true}
                value={this.state.confirm}
                onChangeText={(text) => this.setState({confirm: text})}
                autoCorrect={false}
                returnKeyType="go"
            />
            <View style={styles.line} />
          </View>
          <View style={styles.inputButtons}>
            <View style={styles.login}>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
          </View>
      </ViewContainer>
    )
  }
}
