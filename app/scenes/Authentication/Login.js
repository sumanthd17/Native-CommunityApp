import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import { styles } from './styles'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return(
      <ViewContainer>
        <StatusbarBackground />
            {/*<View>
              <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({email: text})}
                  value={this.state.email}
                  placeholder="EMAIL"
                  placeholderTextColor='black'
              />
              <View style={styles.line} />
              <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({password: text})}
                  value={this.state.password}
                  placeholder="PASSWORD"
                  secureTextEntry={true}
                  placeholderTextColor='black'
              />
              <View style={styles.line} />
          </View>*/}
          <View style={{padding: 20}}>
            <TextInput
              style={styles.textInput}
              placeholder="EMAIL"
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput
                style={styles.textInput}
                placeholder="PASSWORD"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
            />
          </View>
      </ViewContainer>
    )
  }
}
