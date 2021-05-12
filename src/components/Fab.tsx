import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface IFab {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

const Fab = ({ title, onPress, position = 'br' }: IFab) => {
    return (
        <View
            style={[
                styles.fabPosition,
                position === 'bl' ? styles.left : styles.right,
            ]}
        >
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple(
                    '#28425b',
                    false,
                    30,
                )}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default Fab;

const styles = StyleSheet.create({
    fabPosition: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 2,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
