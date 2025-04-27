import {ProductModel} from "./ProductModel.ts";

export interface CartItemModel {
    product: ProductModel;
    quantity: number;
    price: number;
}