import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
    const { inputContainerStyle, labelStyle, inputStyle } = styles;
    return (
        <View style={inputContainerStyle}>
            <Text style={labelStyle}>{props.label}</Text>
            <TextInput 
                style={inputStyle}
                value={props.email}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                autoCorrect={false}
            />
        </View>
    );
};

const styles = {
    inputContainerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    }
};

export { Input };
