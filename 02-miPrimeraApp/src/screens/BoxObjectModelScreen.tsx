import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style= {styles.container}>
        <Text style= { styles.titulo}>
           Box Object Model
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: { 
      flex:1,
      backgroundColor :'red',

    },

    titulo: {
      paddingHorizontal: 120,
      fontSize:20,
      borderWidth: 5,
      //backgroundColor: 'red'
    }
});
