import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.children}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 25,
        shadowColor: '000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        position: 'relative',
        elevation: 2
    }
};

export { Header };
