import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBCjcJB-auYv19JPy9YHcp6IMKhxKyWBhE',
            authDomain: 'react-native-auth-d7a0c.firebaseapp.com',
            databaseURL: 'https://react-native-auth-d7a0c.firebaseio.com',
            projectId: 'react-native-auth-d7a0c',
            storageBucket: 'react-native-auth-d7a0c.appspot.com',
            messagingSenderId: '110252991128'
          });
    }
    render() {
        return (
            <View>
                <Header>Log In</Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;
