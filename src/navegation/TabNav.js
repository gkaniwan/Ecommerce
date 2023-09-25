import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootNavegation from "./RootNavegation";
import Profile from '../screens/Profile';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{title:"", headerShown:false}}>
        <Tab.Screen options={{ tabBarIcon: ({focused}) => <Entypo name="shop" size={focused ? 30 :  20} color={focused ? "black" :  "grey"} />,}} name="RootNavegation" component={RootNavegation} />
        <Tab.Screen options={{ tabBarIcon: ({focused}) => <EvilIcons name="user" size={focused ? 30 :  20} color={focused ? "black" :  "grey"} />,}} name="profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNav

const styles = StyleSheet.create({})