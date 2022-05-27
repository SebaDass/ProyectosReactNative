import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab3Screen = () => {

  useEffect(() => {
    console.log('Tab3Screen eff')
     
    }, [])

  return (
    <View>
        <Text>Tab3</Text>
    </View>
  )
}
