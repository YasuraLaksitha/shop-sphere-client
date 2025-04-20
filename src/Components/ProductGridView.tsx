import { FaExclamationTriangle } from 'react-icons/fa';
import products from '../MockDataStore/MOCK_DATA_PORDUCTS.json';
import { ProductModel } from '../Models/ProductModel';
import ProductCard from './ProductCard';

export default function ProductGridView() {
    const error: string|null = '';
    const isLoading: boolean = false;

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (error) {
        return (
            <div className='flex justify-center items-center h-[200px] mt-4'>
                <FaExclamationTriangle className='text-slate-800 text-3xl mr-2' />
                <span className='text-slate-800 font-medium text-lg'>
                    {error}
                </span>
            </div>
        )
    }

    if (!products) {
        return <div>Nothing to display</div>
    }

    return (
        <div className="min-h-[700px] mt-18">
            <div className='pb-6 px-15 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6'>
                {products.map((p, index) => {
                    return <ProductCard key={index} value={p as ProductModel} />
                })}
            </div>
        </div>
    )
}
