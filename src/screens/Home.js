import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <View>
        <Header/>
        <Categories/>
    </View>
  )
}

const styles = StyleSheet.create({})