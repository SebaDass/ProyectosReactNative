import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab1Screen = () => {

  useEffect(() => {
  console.log('Tab1Screen eff')
   
  }, [])
  
  return (
    <View>
        <Text>Tab1</Text>
    </View>
  )
}
