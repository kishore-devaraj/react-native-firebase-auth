import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.cardSectionContainer}>
            {props.children}
        </View>
    );
};

const styles = {
    cardSectionContainer: {
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
