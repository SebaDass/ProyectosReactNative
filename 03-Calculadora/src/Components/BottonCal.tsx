import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { Styles } from '../theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    onPress:(numeroTexto:string) => void;
    //onPress:() => void;
}

export const BottonCal = ({texto,color='#2D2D2D',ancho=false, onPress}: Props) => {


  return (
    <TouchableOpacity
    onPress={() => onPress(texto)}
    >
        <View style={{
        ...Styles.botton,
        backgroundColor:color,
        width:(ancho===true) ? 170 : 80,
        }}>
            <Text style={{
                ...Styles.bottonText,
                color: (color==='#9B9B9B') ? 'black' : 'white'
            }} >
            {texto}
            </Text> 
        </View>
    </TouchableOpacity>
  )
}
