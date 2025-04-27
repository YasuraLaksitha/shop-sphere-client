import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../store/ProductSlice'
import categoryReducer from '../store/CategorySlice.ts'
import cartReducer, {preLoadedCart} from '../store/CartSlice.ts'

export const Store = configureStore({
    preloadedState: {carts: preLoadedCart},
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        carts: cartReducer
    }
});

export type RootDispatcher = typeof Store.dispatch
export type RootState = ReturnType<typeof Store.getState>;