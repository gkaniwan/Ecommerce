import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Products from '../screens/Products'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const RootNavegation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen component={Home} name="Inicio" />
        <Stack.Screen component={Products} name="Productos"/>
        <Stack.Screen component={ItemDetail} name="Detalle"/>
    </Stack.Navigator>
  )
}

export default RootNavegation
