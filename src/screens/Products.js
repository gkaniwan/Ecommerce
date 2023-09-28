import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
// import { products } from '../data/products'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'


export default function Products({ route, navigation}) {

  const products = useSelector((state) => state.homeSlice.allProducts);

  const productsFilterByCategories = useSelector((state) => state.homeSlice.productsFilterByCategories);


    const [categoryProduct, setCategoryProduct] = useState([]);
    const [text, setText] = useState(null);

    const { item } = route.params;

    useEffect(() => {

        setCategoryProduct(productsFilterByCategories);

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
