import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({item}) => {
  return (
    <View>
      <Text style={styles.categotyText}>{item}</Text>
    </View>
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

