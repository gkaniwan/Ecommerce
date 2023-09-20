import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({ navigation, item}) => {
  return (
    <Pressable onPress={() => navigation.navigate("Productos", {item : item})}>
      <Text style={styles.categotyText}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    categotyText: {
        fontSize:15,
        margin: 5,
        color: colors.heavyBlue,
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        width:"100%",

        borderColor: colors.white,
        borderWidth:2,
        borderRadius:15,
        backgroundColor: colors.white,
    },

});

export default CategoryItem

