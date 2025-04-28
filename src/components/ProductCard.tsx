import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {ProductModel} from '../Models/ProductModel';
import ProductViewModal from './ProductViewModal.tsx';
import {truncateText} from "../util/AppplicaionUtils.ts";
import {useRootDispatch} from "../store/Hooks.ts";
import {ADD_TO_CART} from "../store/CartSlice.ts";
import {toast, Toaster} from 'react-hot-toast';


type ProductCardProps = {
    value: ProductModel;
};

export default function ProductCard(product: Readonly<ProductCardProps>) {
    const dispatch = useRootDispatch();
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    const isAvailable: boolean = product.value.productQuantity > 0;

    const handleProductViewModal: VoidFunction = () => {
        setIsModalOpen(true);
    }

    const handleAddToCart: VoidFunction = () => {
        dispatch(ADD_TO_CART(product.value));
        toast.success("Added to cart")
    }

    return (
        <section className='product-card mt-8'>
            <div
                role={'button'}
                onClick={() => {}}
                className='rounded-lg shadow-xl transition-shadow duration-300 min-h-full'>
                <div className='w-full overflow-hidden aspect-[3/2] rounded-lg'>
                    <img
                        onClick={()=>{handleProductViewModal()}}
                        src={product.value.image!}
                        alt={product.value.productName}
                        className='w-full h-full hover:overflow-hidden cursor-pointer transition-transform duration-300 transform: hover:scale-105'
                    />
                </div>
                <div className="p-4">
                    <h2
                        className='text-lg font-semibold mb-2 cursor-pointer'>
                        {product.value.productName}
                    </h2>
                    <div className='min-h-20 max-h-20'>
                        <p className='text-gray-600 text-sm'>
                            {truncateText(product.value.productDescription)}
                        </p>
                    </div>
                    <div className='flex items-center justify-between'>
                        {product.value.productSpecialPrice ? (
                            <div className='flex flex-col'>
                                <span className='text-gray-400 line-through'>
                                    ${Number(product.value.productPrice).toFixed(2)}
                                </span>

                                <span className='text-gray-800 font-bold'>
                                    ${Number(product.value.productSpecialPrice).toFixed(2)}
                                </span>
                            </div>) : (
                            <div className='flex flex-col'>
                                <span className='text-gray-800 text-lx font-bold'>
                                    ${Number(product.value.productPrice).toFixed(2)}
                                </span>
                            </div>
                        )}
                        <button
                            disabled={!isAvailable}
                            onClick={() => {
                                handleAddToCart();
                            }}
                            className={` flex bg-blue-500 text-white rounded-lg px-3 py-2 transition-colors duration-300 w-36 items-center justify-center
                                ${isAvailable ? 'cursor-pointer opacity-100 hover:bg-blue-600' : 'opacity-70'}`
                            }>
                            <FaShoppingCart/>
                            <span className='ps-2'>
                                {isAvailable ? "Add To Cart" : "Out Of Stock"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <ProductViewModal
                product={product.value}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                isAvailable={isAvailable}
            />
            <Toaster position={'bottom-center'}/>
        </section>
    )
}