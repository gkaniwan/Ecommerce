import { StyleSheet, Text, View , TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function Search({text, setText}) {

    const clearText = () => {
        setText(null);
    };

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <TextInput style={styles.input} placeholder='Busca el producto' value={text} onChangeText={(value) => setText(value)}/>
            <Pressable onPress={() => clearText()}>
                <AntDesign name="closecircle" size={30} color="black" />
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.heavyBlue,
        height: 100,
        justifyContent: "center",
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
    },
    input: {
        width: "88%",
        borderWidth: 3,
        borderColor: colors.lightBlue,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        backgroundColor: colors.white,
    },
})