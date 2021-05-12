import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        paddingHorizontal: 100,
        paddingVertical: 20,
        fontSize: 20,
        marginHorizontal: 20,
        borderWidth: 10,
    },
});
