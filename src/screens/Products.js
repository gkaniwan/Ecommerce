import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'


export default function Products({category}) {

    const [categoryProduct, setCategoryProduct] = useState([]);
    const [text, setText] = useState(null);

    useEffect(() => {
        const filterByCategory = products.filter((el) => el.category === category);
        setCategoryProduct(filterByCategory);

        if(text) {
            const prod = products.filter((el) => el.title.toLocaleLowerCase() === text.toLocaleLowerCase());
            setCategoryProduct(prod);
        }

    }, [text, category]);


  return (
    <View>
        <Header title="Productos"/>
        <Search text={text} setText={setText}/>
        <FlatList 
            data={categoryProduct} 
            keyExtractor={products.id} 
            renderItem={({item}) => <ProductItem item={item}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({})
