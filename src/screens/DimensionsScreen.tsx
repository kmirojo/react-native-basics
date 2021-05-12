import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

const DimensionsScreen = () => {
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.purpleBox} />
                <View style={styles.orangeBox} />
            </View>
            <Text style={styles.title}>W: {width}</Text>
            <Text style={styles.title}>H: {height}</Text>
        </View>
    );
};

export default DimensionsScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        width: '50%',
        height: '50%',
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
});
