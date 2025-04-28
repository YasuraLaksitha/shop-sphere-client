import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../store/ConfigStore.ts";
import { CartModel } from "../Models/CartModel.ts";
import { CartItemModel } from "../Models/CartItemModel.ts";
import ItemContent from "./ItemContent.tsx";

export default function Cart() {
    const { cart } = useSelector((state: RootState) => state.carts);

    const newCart: CartModel = { ...cart };
    newCart.totalPrice = cart.cartItems.reduce((acc: number, item: CartItemModel) => acc + item.price, 0);

    return (
        <div className="mx-15">
            <div className="flex flex-col justify-center gap-x-5 gap-y-2 items-center text-center mt-10">
                <div className="flex justify-center items-center gap-2">
                    <FaShoppingCart size={36} />
                    <span className="text-4xl font-bold text-slate-800">
                        Your Cart
                    </span>
                </div>
                <p className="text-slate-400">
                    All your items will be displayed here. You can add more items to your cart by clicking on the add to cart button.
                </p>
            </div>

            {cart.cartItems.length === 0 ? (
                <div className="text-center text-slate-400 mt-10">Your cart is empty.</div>
            ) : (
                <>
                    <div className="flex ms-15 grid grid-cols-4 gap-x-5 gap-y-5 mt-10 text-slate-800">
                        <div className="col-span-2 xl:col-span-1 justify-self-start text-lg">Product</div>
                        <div className="justify-self-center text-lg">Price</div>
                        <div className="justify-self-center text-lg">Quantity</div>
                        <div className="justify-self-center text-lg">Total</div>
                    </div>

                    <div className="mt-5">
                        {cart.cartItems.map((item: CartItemModel, index: number) => (
                            <div key={index}>
                                <ItemContent item={item} />
                            </div>
                        ))}
                    </div>

                    <div className="flex border-t-2 border-gray-200 mt-2 py-4 justify-between">
                        <div></div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-5 w-full justify-between font-medium">
                                <span>Subtotal</span>
                                <span>${newCart.totalPrice.toFixed(2)}</span>
                            </div>
                            <p className="text-slate-400">
                                Taxes and shipping will be calculated at checkout.
                            </p>

                            <Link to="/checkout">
                                <button className="flex gap-2 items-center justify-center font-semibold cursor-pointer bg-blue-600 text-white rounded-sm py-2 px-3 w-full hover:bg-blue-500 hover:text-gray-200">
                                    <MdShoppingCart size={25} />
                                    Checkout
                                </button>
                            </Link>

                            <Link
                                className="flex gap-x-1 text-slate-400 items-center justify-start text-sm"
                                to="/products"
                            >
                                <MdArrowBack className="mt-1" />
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
