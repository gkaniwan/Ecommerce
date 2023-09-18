import { StyleSheet, Text, View, Image, Button } from 'react-native'
import Header from '../components/Header';
import { products } from '../data/products'
import { AntDesign } from '@expo/vector-icons';

const ItemDetail = () => {

  const initialProd = products[0];


  return (
    <View>
      
      <Header title='Detalle Producto'/>
      <View style={styles.containerImage}>
        
        <Image resizeMode='cover' style={styles.image} source={{uri: initialProd.images[2]}} />
        <Text style={styles.title}>{initialProd.title}</Text>
        <Text style={styles.descripcion}>Descripción: {initialProd.description}</Text>
        <Text style={styles.price}>Precio: {initialProd.price}</Text>
      </View>
      <Button title="Agregar" onPress={() => console.log("Presionado")}/>
      <View style={styles.containerImage}>
        <AntDesign name="star" size={21} color="gold" />
        <Text style={styles.rating}>Rating: {initialProd.rating}</Text>
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  image:{
    height: 350,
    width: 400,
},
containerImage:{
  alignItems: "center",
},
title:{
  fontSize: 30,
  fontFamily: "Roboto",
},
descripcion:{
  fontSize: 15,
  fontStyle: "italic",
  fontFamily: "Roboto",
},
price:{
  fontSize: 15,
  fontWeight: "bold",
  fontFamily: "Roboto",
},
rating:{
  alignItems: "center",
},

})