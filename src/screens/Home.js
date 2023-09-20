import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { useNavigation } from '@react-navigation/native'

export default function Home({navigation}) {

  return (
    <View>
        <Header title="Categorias" navigation={navigation}/>
        <Categories navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({})