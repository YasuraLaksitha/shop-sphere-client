import {FaExclamationTriangle} from 'react-icons/fa';
import {useRootSelector} from '../store/Hooks';
import ProductCard from './ProductCard';
import Filter from './Filter';
import {ProductModel} from "../Models/ProductModel.ts";
import useProductFilter from "../hooks/useProductFilter.ts";
import {RootState} from "../store/ConfigStore.ts";
import Loader from "./Loader.tsx";
import PaginationData from "./PaginationData.tsx";

export default function ProductGridView() {
    const {isLoading, error, products, pagination} = useRootSelector((state: RootState) => state.products);
    const categoryState = useRootSelector((state: RootState) => state.categories);
    useProductFilter();

    if (error || categoryState.error) {
        return (
            <div className='flex justify-center items-center h-[200px] mt-4'>
                <FaExclamationTriangle className='text-slate-800 text-3xl mr-2'/>
                <span className='text-slate-800 font-medium text-lg'>
                    {error ?? categoryState.error}
                </span>
            </div>
        )
    }

    if (products?.length == 0) {
        return <div>Nothing to display</div>
    }

    return (
        <div className="min-h-[700px]">
            <Filter/>
            {(isLoading || categoryState.isLoading) ? (
                <div className='flex justify-center items-center h-[200px] mt-4'>
                    <Loader/>
                </div>
            ) : (
                <div>
                    <div
                        className='mt-18 pb-6 px-15 grid 2xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-y-6 gap-x-6'>
                        {products?.map((p: ProductModel, index: number) => {
                            return <ProductCard key={index} value={p}/>
                        })}
                    </div>
                    <div className='flex justify-center items-center my-10'>
                        <PaginationData
                            numberOfPages={pagination?.totalPages as number}
                            dataCount={pagination?.totalElements as number}/>
                    </div>
                </div>
            )}

        </div>
    )
}
