import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    fondo: {
        flex:1,
        backgroundColor: 'black',
        

    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        //backgroundColor:'red',
        justifyContent:'flex-end',
    },

    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',   
        marginBottom:10,     
    },
    resultadoP:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },

    //Botón  

    botton:{
        borderRadius: 100,
        height:80,
        width:80,
        backgroundColor:'',
        justifyContent:'center',
        marginHorizontal:7,
    },

    bottonText:{
        color:'white',
        textAlign:'center',
        fontSize:30,
        padding:10,
        fontWeight:'400' //hace más delgado o grueso el texto ingresado

    }


});