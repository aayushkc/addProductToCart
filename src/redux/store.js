import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productState";

const store = configureStore(
    {
        reducer:{ product:productSlice}
    }
)

export default store;