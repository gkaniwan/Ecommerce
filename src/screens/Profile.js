import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Entypo } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View>
      <Header title="Perfil" />
      <View style={{ alignItems: "center", marginTop:20}}>
        <Image resizeMode='cover' style={styles.imagen} source={{ uri:"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"}} />

      </View>
      <View style={{ alignItems: "center", marginTop:20}}>
        <Pressable onPress={() => console.log("Abrir camara")} style={styles.contenedor}>
            <Text style={styles.texto}>Subir Foto</Text>
            <Entypo name="camera" size={24} color="black" />
            </Pressable>
      </View>
      <View style={{ alignItems: "center", marginTop:20}}>
        <Pressable onPress={() => console.log("Abrir galeria")} style={styles.contenedor}>
            <Text style={styles.texto}>Abrir Galeria</Text>
            <Entypo name="image" size={24} color="black" />
        </Pressable>
      </View>
      <View style={{ alignItems: "center", marginTop:20}}>
        <Pressable onPress={() => console.log("Abrir Gps")} style={styles.contenedor}>
            <Text style={styles.texto}>Subir Foto</Text>
            <Entypo name="map" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    imagen:{
        width:200,
        height:200,
    },
    contenedor: {
        flexDirection: 'row', // Esto coloca el texto y el icono en horizontal
        alignItems: 'center', // Esto alinea el contenido verticalmente
        padding: 10,
        backgroundColor: 'skyblue', // Cambia el color de fondo según tus necesidades
        borderRadius: 20,
      },
      texto: {
        marginRight: 10, // Espacio entre el texto y el icono
        fontSize: 16,
      },
})