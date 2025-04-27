import {CartItemModel} from "../Models/CartItemModel.ts";
import {createSlice} from "@reduxjs/toolkit";
import {ProductModel} from "../Models/ProductModel.ts";
import {CartModel} from "../Models/CartModel.ts";

type CartStateProps = {
    cart: CartModel;
    isLoading: boolean;
    isPending?: boolean;
    error?: string;
}

const initialState: CartStateProps = {
    cart: {
        cartItems: [],
        totalPrice: 0
    },
    isLoading: false,
    isPending: undefined,
    error: undefined,
}

const CartSlice = createSlice({
    name: 'CART_REDUCER',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action) => {
            const product: ProductModel = action.payload;
            const cartItem = state.cart.cartItems
                .find(item => item.product.productName === product.productName);

            console.log("Product", product)

            if (!cartItem) {
                const newItem: CartItemModel = {
                    product,
                    quantity: 1,
                    price: product.productPrice
                };
                state.cart.cartItems.push(newItem);
            }
        }
    },

});

const preLoadedCart: CartStateProps = localStorage.getItem('cart') ?
    JSON.parse(<string>localStorage.getItem('cart')) :
    initialState

export const {ADD_TO_CART} = CartSlice.actions;
export default CartSlice.reducer;
export {preLoadedCart}