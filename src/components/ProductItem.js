import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { products } from '../data/products'

export default function ProductItem({ item }) {
  return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => console.log("PRESIONADO")}> 
                <Text style={styles.text}>{ item.title}</Text>
                <Text style={styles.text}>{ item.price}</Text>
            <Image resizeMode='cover' style={styles.image} source={{uri: item.images[0]}} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.heavyBlue,
        borderRadius: 10,
        borderWidth: 2,
        height: 100,
        justifyContent: "center",
    },
    text:{
        fontSize:20,
        fontWeight: "bold",
        marginLeft: 20,

    },
    image:{
        height: 50,
        width: 70,
    },
    button:{
        flexDirection:"row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        alignItems: "center",
    },
})