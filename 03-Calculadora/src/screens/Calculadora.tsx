import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../theme/appTheme';
import { BottonCal } from '../Components/BottonCal';

export const Calculadora = () => {

  const [numero, setnumero] = useState('10');
  const [numeroAnt, setnumeroAnt] = useState('10');

  const limpiar = () => {
    setnumero('0');
  };

  const armarN = (numeroTexto:string) => {

    //no aceptar doble '.'
    if (numero.includes('.') && numeroTexto === '.') return;
     else if (numero.startsWith('0') || numero.startsWith('-0') ) {
      //punto decimal
      if (numeroTexto === '.') {
        setnumero(numero + numeroTexto);

        //evaluar si es otro cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setnumero(numero + numeroTexto);

      }else if (numero.includes('.') && numeroTexto != '.') {
        setnumero(numero + numeroTexto);
      }

      

    }else {
      setnumero(numero + numeroTexto);
    }
    
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setnumero(numero.replace ('-',''));
    }else {
      setnumero('-' + numero)
    }
  };

  return (
    <View style={Styles.calculadoraContainer}>
        <Text style={Styles.resultadoP}>{numeroAnt}</Text>
        <Text style={
          Styles.resultado}
          numberOfLines={1}
          adjustsFontSizeToFit
          >{numero} </Text>

      <View style={Styles.fila}>
        {/* botton */}
        <BottonCal texto={'C'} color='#9B9B9B' onPress={limpiar}  />
        <BottonCal texto={'+/-'} color='#9B9B9B' onPress={positivoNegativo}/>
        <BottonCal texto={'%'} color='#9B9B9B' onPress={limpiar}/>
        <BottonCal texto={'/'} color='#FF9427' onPress={limpiar}/>
      </View>
      <View style={Styles.fila}>
        {/* botton */}
        <BottonCal texto={'7'} onPress={armarN} />
        <BottonCal texto={'8'} onPress={armarN}/>
        <BottonCal texto={'9'} onPress={armarN}/>
        <BottonCal texto={'X'} color='#FF9427' onPress={limpiar}/>
      </View>
      <View style={Styles.fila}>
        {/* botton */}
        <BottonCal texto={'4'} onPress={armarN}/>
        <BottonCal texto={'5'} onPress={armarN} />
        <BottonCal texto={'6'} onPress={armarN}/>
        <BottonCal texto={'-'} color='#FF9427' onPress={limpiar}/>
      </View>
      <View style={Styles.fila}>
        {/* botton */}
        <BottonCal texto={'1'} onPress={armarN}/>
        <BottonCal texto={'2'} onPress={armarN}/>
        <BottonCal texto={'3'} onPress={armarN}/>
        <BottonCal texto={'+'} color='#FF9427' onPress={limpiar}/>
      </View>
      <View style={Styles.fila}>
        {/* botton */}
        <BottonCal texto={'0'} ancho onPress={armarN}/>
        <BottonCal texto={'.'} onPress={armarN}/>
        <BottonCal texto={'='} color='#FF9427' onPress={limpiar}/>
      </View>
        
    </View>
    
  )
}
