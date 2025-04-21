import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../store/ProductSlice'

export const Store = configureStore({
    reducer: {
        products: productReducer
    }
});

export type ProductDispatch = typeof Store.dispatch
export type ProductRootState = ReturnType<typeof Store.getState>;