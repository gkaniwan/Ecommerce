import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'


export default function Products({ route, navigation}) {

    const [categoryProduct, setCategoryProduct] = useState([]);
    const [text, setText] = useState(null);

    const { item } = route.params;

    useEffect(() => {
        const filterByCategory = products.filter((el) => el.category === item);
        setCategoryProduct(filterByCategory);

        if(text) {
            const prod = products.filter((el) => el.title.toLocaleLowerCase() === text.toLocaleLowerCase());
            setCategoryProduct(prod);
        }

    }, [text, item]);


  return (
    <View>
        <Header title={ item }/>
        <Pressable onPress={() => navigation.goBack()}><Text>Atras</Text></Pressable>
        <Search text={text} setText={setText}/>
        <FlatList 
            data={categoryProduct} 
            keyExtractor={products.id} 
            renderItem={({item}) => <ProductItem navigation={navigation} item={item}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({})
