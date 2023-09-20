import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categorias } from '../data/categorias'
import CategoryItem from './CategoryItem'
import { colors } from '../theme/colors'

const Categories = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <FlatList 
        data={categorias}
        keyExtractor={(key) => key }
        renderItem={({item}) => <CategoryItem navigation={navigation} item={item}/>}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.heavyBlue,
    },
})