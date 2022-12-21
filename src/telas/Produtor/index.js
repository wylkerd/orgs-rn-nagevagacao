import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function Produtor() {
  const route = useRoute();

  return (
    <View>
      <Text>Produtor</Text>
    </View>
  )
}