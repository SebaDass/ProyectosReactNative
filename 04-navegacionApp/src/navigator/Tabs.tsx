import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/AppTheme';
import { Platform, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



export const Tabs = () => {

  return Platform.OS === 'ios'
          ? <TabsIOS/>
          : <TabsAndroid/>
}




const BTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid=() => {
  return (
    <BTabAndroid.Navigator
    sceneAnimationEnabled= {true}
    barStyle= {{
      backgroundColor: colores.primary
    }}
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarStyle: {
        borderTopColor: Colors.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarIcon: ({color, focused}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'apps-outline';
            break;
          case 'Tab2Screen':
            iconName = 'beer-outline';
            break;
          case 'StackNavitagor':
            iconName = 'people-outline';
            break;
        }
        return (
          <Text>
            {iconName}
            {/* <Icon name={iconName} color={colors.primary} size={20} /> */}
          </Text>
        );
      },
    })}>
      <BTabIOS.Screen name="Tab1Screen" options={{title:'tab1'}}  component={Tab1Screen} />
      <BTabIOS.Screen name="Tab2Screen" options={{title:'tab2'}}component={Tab2Screen} />
      <BTabIOS.Screen name="StackNavitagor" options={{title:'stack'}}component={StackNavigator} />
    </BTabAndroid.Navigator>
  );
}









const BTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BTabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor:'white',

    }}
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarStyle: {
        borderTopColor: Colors.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarIcon: ({color, focused, size}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'apps-outline';
            break;
          case 'Tab2Screen':
            iconName = 'beer-outline';
            break;
          case 'StackNavitagor':
            iconName = 'people-outline';
            break;
        }
        return (
          <Text>
            {iconName}
            {/* <Icon name={iconName} color={colors.primary} size={20} /> */}
          </Text>
        );
      },
    })}>
      {/* <Tab.Screen name="Tab1Screen" options={{title:'tab1' , tabBarIcon: () => <Text style={{color: 'red'}} > T1</Text>}}  component={Tab1Screen} /> */}
      <BTabIOS.Screen name="Tab1Screen" options={{title:'tab1'}}  component={Tab1Screen} />
      <BTabIOS.Screen name="Tab2Screen" options={{title:'tab2'}}component={Tab2Screen} />
      <BTabIOS.Screen name="StackNavitagor" options={{title:'stack'}}component={StackNavigator} />
    </BTabIOS.Navigator>
  );
}