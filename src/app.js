import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDT7w4zFpmmO-jkuskf_Mgw7B71WRxZXTE',
      authDomain: 'auth-f7b3c.firebaseapp.com',
      databaseURL: 'https://auth-f7b3c.firebaseio.com',
      storageBucket: 'auth-f7b3c.appspot.com',
      messagingSenderId: '709993052507'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App, my man!</Text>
      </View>
    );
  }
}

export default App;
