import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onSuccess.bind(this))
            .catch(this.onError.bind(this));
        });
    }

    onSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onError() {
        this.setState({
            error: 'Invalid Credentails',
            loading: false
        });
    }

    renderSpinner() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.email}
                        label="Email"
                        placeholder="email@domain.com"
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        value={this.state.password}
                        label="Password"
                        placeholder="password"
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderSpinner()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20
    }
};

export default LoginForm;
