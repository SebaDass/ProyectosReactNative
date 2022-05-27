import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator
    drawerContent={ (props) => <Menu {...props}/> }
    
    >
      <Drawer.Screen name="Tabs" options={{title :'home'}} component={Tabs} />
      <Drawer.Screen name="SettingsScreen" options={{title :'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const Menu = ({navigation}: DrawerContentComponentProps)  =>{

 return(
 <DrawerContentScrollView>

   {/* Avatar */}
    <View 
      style={styles.avatarContainer}> 
      <Image
      source={{
        uri: 'https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
      
      }}
      style={styles.avatar}
      />
    </View>

    {/* Menú */}
      <View 
      style={styles.menuContainer}
      >
      <TouchableOpacity
      style={styles.menuBoton}
      onPress={ () => navigation.navigate('Tabs') }
      >
        <Text 
        style={styles.menuText}
        >
          Navegación
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.menuBoton}
      onPress={ () => navigation.navigate('SettingsScreen') }
      >
        <Text
        style={styles.menuText}
        >
          Settings
        </Text>
      </TouchableOpacity>

      </View>


 </DrawerContentScrollView>
 );
    }
