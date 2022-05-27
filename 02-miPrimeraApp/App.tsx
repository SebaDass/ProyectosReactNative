import React from 'react'
import { SafeAreaView, SafeAreaViewBase, Text, View } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style= {{flex: 1}}>
     <ContadorScreen/>
    </SafeAreaView>
    //<HolaMundoScreen/>
    //<ContadorScreen/>
    //<BoxObjectModelScreen/>
    //DimensionesScreen
  )
}


export default App;
