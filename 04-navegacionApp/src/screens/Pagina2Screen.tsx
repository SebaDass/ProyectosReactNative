import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { useEffect } from 'react';

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title:'Hola mundo',
      headerBackTitle: 'Atras' //esto es para cambiar el nombre del botón regresar de ios
    } )
  }, [])
  

  return (
    <View style={ styles.globalMargin}>
      <Text style={styles.title}> Pagina 2 Screen </Text>

      <Button
      title="Ir página 3"
      onPress={()=> navigator.navigate('Pagina3Screen')}
      >
  

      </Button>
      </View>
  )
}
