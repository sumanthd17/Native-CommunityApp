import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  inputButtons: {
    marginTop: 40,
  },
  login: {
      paddingLeft: 40,
      paddingRight: 40,
  },
  loginButton: {
      borderWidth: 1,
      height: 40,
      borderRadius: 20,
      overflow: 'hidden',
      alignItems: 'center',
  },
  loginButtonText: {
      padding: 10,
      fontSize: 12,
  },
  register: {
    padding: 15,
    alignItems: 'center',
  },
  registerButton: {

  },
  registerButtonText: {
      color: 'blue',
  },
  textInput: {
      height: 30,
      /*padding: 20,*/
      marginLeft: 20,
      marginRight: 20,
      fontSize: 12,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    marginLeft: 20,
    marginRight: 20,
  },
  social: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#38579D',
    padding: 5,
    margin: 20,
    borderRadius: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#38579D',
    fontWeight: "400",
    marginLeft: 10,
  }
})
