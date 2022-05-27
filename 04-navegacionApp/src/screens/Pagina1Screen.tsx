import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text,TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme';


interface Props extends StackScreenProps<any,any>{
  
};

export const Pagina1Screen = ({navigation} : Props) => {


  

  return (
    <View 
    style={ styles.globalMargin}
    >
      <Text style={styles.title}> Pagina 1 Screen </Text>
      <Button
      title="Ir página 2"
      onPress={ () => navigation.navigate('Pagina2Screen') }
      />

      <Text style={{color:'black', fontSize:30}}>
        Navegar con argumentos
      </Text>

        <View style= {{flexDirection: 'row'}}>
        <TouchableOpacity
        style={{
          ...styles.botonGrande,
          backgroundColor:'#5856d6'
        }}
        onPress={ () => navigation.navigate('PersonaScreen', {
          id: 1,
          nombre: 'Pedro'
        }) }
        >
          <Text
          style={
            styles.botonGrandeTexto
          }
          >
            pedro
          </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={{
        ...styles.botonGrande,
        backgroundColor:'#ff9427'
      }}
        onPress={ () => navigation.navigate('PersonaScreen', {
          id: 2,
          nombre: 'Maria'
        }) }
        >
          <Text
          style={
            styles.botonGrandeTexto
          }
          >
            Maria
          </Text>
      </TouchableOpacity>
        </View>

      
      </View>
  )
}
