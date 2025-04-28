import {CartItemModel} from "../Models/CartItemModel.ts";
import {ProductModel} from "../Models/ProductModel.ts";
import {useState} from "react";
import {FaTrashCan} from "react-icons/fa6";
import Counter from "./Counter.tsx";
import {useRootDispatch} from "../store/Hooks.ts";
import {toast, Toaster} from "react-hot-toast";
import {REMOVE_FROM_CART, UPDATE_ITEM_QTY} from "../store/CartSlice.ts";


type ItemContentProps = {
    item: CartItemModel;
}

export default function ItemContent(props: Readonly<ItemContentProps>) {
    const dispatch = useRootDispatch();
    const [currentQuantity, setCurrentQuantity] = useState<number>(props.item.quantity);
    const product: ProductModel = props.item.product;

    function increaseQty() {
        const nextQuantity = currentQuantity + 1;
        setCurrentQuantity(nextQuantity);
        dispatch(UPDATE_ITEM_QTY({
            updatedCartItem: props.item,
            updatedQuantity: nextQuantity
        }));
    }

    function reduceQty() {
        if (currentQuantity >= 1) {
            const nextQuantity = currentQuantity - 1;
            setCurrentQuantity(nextQuantity);
            dispatch(UPDATE_ITEM_QTY({updatedCartItem: props.item, updatedQuantity: nextQuantity}));
        }
    }

    function removeItemFromCart() {
        dispatch(REMOVE_FROM_CART(props.item));
        toast.success(`${product.productName} has removed from cart successfully`);
    }

    return (
        <div
            className={'flex grid grid-cols-4 justify-center my-4 items-center border-[1px] border-slate-200 rounded-lg py-4'}>
            <div className={'ms-3 text-md text-slate-800'}>
                <h3 className={'lg:text-[17px]'}>
                    {product.productName}
                </h3>
                <div>
                    <img className={'object-cover w-50 rounded-xl py-2'}
                         src={product.image!} alt={product.productName}/>
                </div>

                <div className={'flex item-start mt-3'}>
                    <button
                        className={'flex items-center  justify-center gap-x-2 border-2 px-3 py-1 rounded-md text-rose-700 font-semibold border-rose-600 ' +
                            'hover:text-rose-800 hover:bg-rose-100 transition duration-300'}
                        onClick={() => {
                            removeItemFromCart()
                        }}>
                        <FaTrashCan/>
                        Remove
                    </button>
                </div>
            </div>

            <div className={'justify-self-center text-sm ms-15'}>
                ${product.productSpecialPrice ?? product.productPrice}
            </div>

            <div className={'justify-self-center text-sm ms-15'}>
                <Counter
                    quantity={currentQuantity}
                    handleIncrement={increaseQty}
                    handleDecrement={reduceQty}
                />
            </div>

            <div className={'justify-self-center text-sm ms-15'}>
                ${props.item.price}
            </div>
            <Toaster position={'bottom-center'}/>
        </div>
    )
}