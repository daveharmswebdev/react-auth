import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDT7w4zFpmmO-jkuskf_Mgw7B71WRxZXTE',
      authDomain: 'auth-f7b3c.firebaseapp.com',
      databaseURL: 'https://auth-f7b3c.firebaseio.com',
      storageBucket: 'auth-f7b3c.appspot.com',
      messagingSenderId: '709993052507'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ paddingTop: 75 }}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
