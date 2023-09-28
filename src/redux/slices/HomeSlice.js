import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../data/categorias";
import { products } from "../../data/products";


const homeSlice = createSlice({
    
    name: "home",

    initialState: {
        allCategories: categorias,
        allProducts: products, 
    },

    reducers: {},

})

export default homeSlice.reducer;