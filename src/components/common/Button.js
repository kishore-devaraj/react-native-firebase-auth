import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ((props) => {
    const { buttonStyles, buttonTextStyles } = styles;
    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyles}>
            <Text style={buttonTextStyles}>{props.children}</Text>
        </TouchableOpacity>
    );
});

const styles = {
    buttonTextStyles: {
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
};

export { Button };
