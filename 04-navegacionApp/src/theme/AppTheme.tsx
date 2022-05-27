import { StyleSheet } from 'react-native';

export const colores = {

    primary: '#5856d6',
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20,
    },
    title:{
        fontSize:30,
        marginBottom:10,
        color: 'black',
    },

    botonGrande:{
        width:100,
        height:100,
        backgroundColor:'green',
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:20

    },

    botonGrandeTexto:{
        color:'white',
        fontSize:18,
        fontWeight: 'bold',
    },

    avatarContainer:{
        alignItems:'center',
        marginTop:20,
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100,     
    },

    menuContainer:{
        marginVertical:30,
        marginHorizontal: 30,

    },
    menuText:{
        fontSize:20,
        color:'black'
    },
    menuBoton:{
        marginVertical:10
    },
});
