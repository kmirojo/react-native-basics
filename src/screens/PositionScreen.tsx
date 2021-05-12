import React from 'react';
import { View, StyleSheet } from 'react-native';

const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.purpleBox]} />
            <View style={[styles.box, styles.orangeBox]} />
            <View style={[styles.box, styles.greenBox]} />
            <View style={[styles.box, styles.redBox]} />
        </View>
    );
};

export default PositionScreen;

// Default position is always relative

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25C4D9',
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        top: 0,
        right: 0,
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        bottom: 0,
        right: 0,
    },
    greenBox: {
        backgroundColor: 'green',
        bottom: 0,
        left: 0,
    },
    redBox: {
        backgroundColor: 'red',
        top: 0,
        left: 0,
    },
});
