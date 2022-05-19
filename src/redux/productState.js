import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
        name:'product',
        initialState:{productName: '', productPrice:null, productAmount:0, totalAmount:0},
        reducers:{
            cartProduct(state,action){
                state.productAmount = action.payload.productAmount
                state.productName = action.payload.productName
                state.productPrice = action.payload.productPrice
                state.totalAmount = action.payload.productPrice * action.payload.productAmount
            }, 
            deleteProduct(state){
                    state.productAmount = 0
            }
        }
})

export const productActions = productSlice.actions;

export default productSlice.reducer;