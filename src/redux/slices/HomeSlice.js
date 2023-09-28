import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../data/categorias";
import { products } from "../../data/products";


const homeSlice = createSlice({
    
    name: "home",

    initialState: {
        allCategories: categorias,
        allProducts: products, 
        categoryPressed: "",
    },

    reducers: {
        setCategoryPressed: (state, action) => {
            state.categoryPressed = action.payload;
        }
    },

})

export const { setCategoryPressed } = homeSlice.actions;

export default homeSlice.reducer;