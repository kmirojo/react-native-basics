import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.box, styles.box1]}> Box 1 </Text>
            <Text style={[styles.box, styles.box2]}> Box 2 </Text>
            <Text style={[styles.box, styles.box3]}> Box 3 </Text>
        </View>
    );
};

export default FlexScreen;

// Default flex-direction is always column

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28c4d9',
        flexDirection: 'row',
    },
    box: {
        // borderWidth: 1,
        // borderColor: 'white',
        color: 'white',
        fontSize: 30,
    },
    box1: {
        flex: 1,
        // width: 100,
        // height: 100,
        backgroundColor: 'red',
    },
    box2: {
        // flex: 4,
        // width: 100,
        // height: 100,
        backgroundColor: 'orange',
    },
    box3: {
        // flex: 2,
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
    },
});
