import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps <any,any>{};

export const Pagina3Screen = ({navigation}:Props ) => {
  return (
    <View>
      <Text style={styles.title}> Pagina 3 Screen </Text>
    <Button
    title = 'regresar'
    onPress={() => navigation.pop()}
    />

<Button
    title = 'Ir Home'
    onPress={() => navigation.popToTop()}
    />

      </View>
  )
}
