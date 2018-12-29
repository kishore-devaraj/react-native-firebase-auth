import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
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
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
