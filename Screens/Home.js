import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase';
export default class Home extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}
signOutUser = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        console.log(e);
    }
}
render() {
    const { currentUser } = this.state
    
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="logout" onPress={() => this.signOutUser()} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// import React, {Component} from "react";
// import {View, Text} from 'react-native';
// import { StyleSheet, Platform, Image, Text, View } from 'react-native'
// export default class Home extends React.Component{
//     render(){
//         return(
//             <View>
//                 <Text>Home Screen Page</Text>
//             </View>
//         )
//     }
// }