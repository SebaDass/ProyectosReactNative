import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{
  
};

// interface RouterParams {
//   id:number;
//   nombre:string;
// };

export const PersonaScreen = ({navigation,route}: Props) => {

    const params = route.params;

    useEffect(() => {

    navigation.setOptions({
      title: params.nombre
    })

  }, [])
  

  return (
    <View style={styles.globalMargin} >
        <Text style={styles.title} >
            {
                JSON.stringify(params,null,3)
            }
        </Text>
    </View>
  )
}
