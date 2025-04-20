import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ProductModel } from '../Models/ProductModel';

type ProductCardProps = {
    value: ProductModel;
};

export default function ProductCard(product: ProductCardProps) {
    const [productViewModel, setProductViewModel] = React.useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = React.useState<Partial<ProductModel>>();

    const isAvailable: boolean = product.value.productQuantity > 0;

    const handleProductView = (product: ProductModel) => {
        setSelectedProduct(product);
        setProductViewModel(true);
    }

    return (
        <section className='product-card'>
            <div className='rounded-lg shadow-xl transition-shadow duration-300'>
                <div
                    onClick={() => handleProductView(product.value)}
                    className='w-full overflow-hidden aspect-[3/2]'>
                    <img
                        src={product.value.image!}
                        alt={product.value.productName}
                        className='w-full h-fulll cursor-pointer transition-transform duration-300 trasform: hover:scale-105'
                    />
                </div>
                <div className="p-4">
                    <h2 onClick={() => { }}
                        className='text-lg font-semibold mb-2 cursor-pointer'>
                        {product.value.productName}
                    </h2>
                    <div className='min-h-20 max-h-20'>
                        <p className='text-gray-600 text-sm'>
                            {product.value.productDescription}
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
                            disabled = {!isAvailable}
                            onClick={() => { }}
                            className={` flex bg-blue-500 text-white rounded-lg px-3 py-2 transition-colors duration-300 w-36 items-center justify-center
                                ${isAvailable ? 'cursor-pointer opacity-100 hover:bg-blue-600' : 'opacity-70'}`
                            }>
                            <FaShoppingCart />
                            <span className='ps-2'>
                                {isAvailable ? "Add To Cart" : "Out Of Stock"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}