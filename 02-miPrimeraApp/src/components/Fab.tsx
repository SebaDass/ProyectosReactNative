import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';


interface Props {
    tittle: String;
    position: 'restar' | 'sumar';
    onPress:() => void;
    

}

export const Fab = ({tittle, onPress, position='sumar'}: Props) => {

    const ios= () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity= {0.8}
                style={[
                    styles.fabLocation,
                    (position === 'sumar') ?styles.right : styles.left
                ]}
                > 
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                             {tittle}
                        </Text>
                    </View>
            </TouchableOpacity>
          )
    };

    const android = () =>{
        return (
            <View
            style={[
                styles.fabLocation,
                (position === 'sumar') ?styles.right : styles.left
            ]}>
                <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('green', false, 30)}
                > 
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                             {tittle}
                        </Text>
                    </View>
              </TouchableNativeFeedback>
            </View>
          )
    };

    return (Platform.OS === 'ios') ?ios() : android()
}


const styles=StyleSheet.create({

    fabLocation: {
        position:'absolute',
        bottom: 30,
    },

    right: {
        right: 30,
    },

    left: {
        left: 30,
    },

    fab:{
        backgroundColor:'#5856d6',
        width: 60,
        height: 60,
        borderRadius:100,
        justifyContent:'center',
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    },

    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf:'center',

    }

})