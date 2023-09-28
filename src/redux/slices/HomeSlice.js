import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../data/categorias";
import { products } from "../../data/products";


const homeSlice = createSlice({
    
    name: "home",

    initialState: {
        allCategories: categorias,
        allProducts: products, 
        categoryPressed: "",
        productsFilterByCategories: []
    },

    reducers: {
        setCategoryPressed: (state, action) => {
            state.categoryPressed = action.payload;
            state.productsFilterByCategories = state.allProducts.filter((el) => el.category === state.categoryPressed);
        }

    },
})

export const { setCategoryPressed } = homeSlice.actions;

export default homeSlice.reducer;