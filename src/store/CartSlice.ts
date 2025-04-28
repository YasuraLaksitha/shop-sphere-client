import {createSlice} from "@reduxjs/toolkit";
import {CartModel} from "../Models/CartModel.ts";
import {ProductModel} from "../Models/ProductModel.ts";
import {CartItemModel} from "../Models/CartItemModel.ts";

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
                .find((item: CartItemModel) => item.product.productName === product.productName);

            if (!cartItem) {
                const newItem: CartItemModel = {
                    product,
                    quantity: 1,
                    price: product.productSpecialPrice && product.productSpecialPrice != 0 ?
                        product.productSpecialPrice :
                        product.productPrice
                };
                state.cart.totalPrice += newItem.price;
                state.cart.cartItems.push(newItem);
            }
        },

        REMOVE_FROM_CART: (state, action) => {
            const cartItem = action.payload

            state.cart.cartItems = state.cart.cartItems.filter(
                (item: CartItemModel) => item.product.productName != cartItem.product.productName);

            state.cart.totalPrice = state.cart.totalPrice - cartItem.price;

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        UPDATE_ITEM_QTY: (state, action) => {
            const {updatedCartItem, updatedQuantity} = action.payload;
            const cartItem = state.cart.cartItems
                .find((item: CartItemModel) => item.product.productName === updatedCartItem.product.productName);

            if (cartItem &&
                updatedQuantity != cartItem?.quantity &&
                cartItem.product.productQuantity > updatedQuantity
            ) {
                const newCartItem: CartItemModel = {
                    ...updatedCartItem,
                    quantity: updatedQuantity,
                    price: updatedQuantity * cartItem.product.productPrice
                }

                state.cart.cartItems.splice(
                    state.cart.cartItems.findIndex((item: CartItemModel) =>
                        item.product.productName === updatedCartItem.product.productName)
                    , 1
                );
                state.cart.cartItems.push(newCartItem);

                state.cart.totalPrice = state.cart.cartItems.reduce((acc: number, item: CartItemModel) =>
                    acc + item.price, 0);
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },
});

const preLoadedCart: CartStateProps = localStorage.getItem('cart') ?
    JSON.parse(<string>localStorage.getItem('cart')).cart :
    initialState

export const {ADD_TO_CART, UPDATE_ITEM_QTY,REMOVE_FROM_CART} = CartSlice.actions;
export default CartSlice.reducer;
export {preLoadedCart}