import React from 'react'
import { Calculadora } from './src/screens/Calculadora';
import { SafeAreaView, StatusBar } from 'react-native';
import { Styles } from './src/theme/appTheme';


export const App = () => {
  return (
    <SafeAreaView style= {Styles.fondo}>
      <StatusBar 
      backgroundColor='black'
      barStyle='light-content'
      />
      <Calculadora/>
    </SafeAreaView>

    
  )
}

export default App;
