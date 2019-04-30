import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from 'react-native-firebase';

import ("firebase/firestore");
export default class SignUp extends React.Component {
  state = { email: '', password: '',firstName: '', lastName: '', mobile: '', errorMessage: null }
handleSignUp = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      const db = firebase.firestore();
      db.collection("Users").add({
        Email: this.state.email,
        Password: this.state.password,
        FirstName: this.state.firstName,
        LastName: this.state.lastName,
        Mobile: this.state.mobile
      }); 
    })
    .then(() => this.props.navigation.navigate('Home'))
    .catch(error => this.setState({ errorMessage: error.message }))
}
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder="First Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <TextInput
          secureTextEntry
          placeholder="Last Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={lastName => this.setState({ lastName })}
          value={this.state.lastName}
        />
        <TextInput
          secureTextEntry
          placeholder="Phone Number"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={mobile => this.setState({ mobile })}
          value={this.state.mobile}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    }
  })