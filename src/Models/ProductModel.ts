export interface ProductModel {
    productName: string;
    productDescription: string;
    productQuantity: number;
    image?: string | null;
    productPrice: number;
    productDiscountPrice?: number;
    productSpecialPrice?: number;
}
