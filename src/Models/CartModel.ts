import {CartItemModel} from "./CartItemModel.ts";

export interface CartModel {
    cartItems: CartItemModel[];
    totalPrice: number;
}
