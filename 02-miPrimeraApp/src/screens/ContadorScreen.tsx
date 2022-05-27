import React, { useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(0)

  return (
<View
    style={style.container}
    >
      <Text
      style= {style.titulo}
      >
        Contador: {contador}
      </Text>

      <Fab
      tittle='+1'
      onPress={() => setContador(contador +1) }
      position='sumar'
      />
      <Fab
      tittle='-1'
      onPress={() => setContador(contador -1) }
      position='restar'
      />
    </View>
  )
}


const style=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'green',
        justifyContent: 'center'
    },

    titulo:{
        fontSize:45,
        textAlign:'center',
        top: -15
    },

    
    
})