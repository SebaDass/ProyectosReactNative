import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const DimensionesScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaRoja}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        height:'100%',
    },

    cajaMorada: {
        backgroundColor: 'purple',
        width: 100,
        height:50,
    },

    cajaRoja: {
        backgroundColor: 'red',
        width: 50,
        height:50,
    },
});