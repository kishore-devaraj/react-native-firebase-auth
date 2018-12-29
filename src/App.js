import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBCjcJB-auYv19JPy9YHcp6IMKhxKyWBhE',
            authDomain: 'react-native-auth-d7a0c.firebaseapp.com',
            databaseURL: 'https://react-native-auth-d7a0c.firebaseio.com',
            projectId: 'react-native-auth-d7a0c',
            storageBucket: 'react-native-auth-d7a0c.appspot.com',
            messagingSenderId: '110252991128'
          });
    
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.setState({ loggedIn: true });
            else this.setState({ loggedIn: false });
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </CardSection>);
            case false: return (<LoginForm />);
            default: return (<Spinner size='large' />);
        }
    }

    render() {
        return (
            <View>
                <Header>Auth</Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
