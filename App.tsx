import React from 'react';
// import CounterScreen from './src/screens/CounterScreen';
import { SafeAreaView } from 'react-native';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import PositionScreen from './src/screens/PositionScreen';
import FlexScreen from './src/screens/FlexScreen';
// import DimensionsScreen from './src/screens/DimensionsScreen';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <CounterScreen />; */}
            {/* <BoxObjectModelScreen /> */}
            {/* <DimensionsScreen /> */}
            {/* <PositionScreen /> */}
            <FlexScreen />
        </SafeAreaView>
    );
};

export default App;
