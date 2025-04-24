import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../store/ProductSlice'
import categoryReducer from '../store/CategorySlice.ts'

export const Store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer
    }
});

export type RootDispatcher = typeof Store.dispatch
export type RootState = ReturnType<typeof Store.getState>;