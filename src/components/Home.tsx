import HeroBanner from "./HeroBanner.tsx";
import {ProductModel} from "../Models/ProductModel.ts";
import ProductCard from "./ProductCard.tsx";
import {useRootSelector} from "../store/Hooks.ts";
import {RootState} from "../store/ConfigStore.ts";
import useProductFilter from "../hooks/useProductFilter.ts";
import {FaExclamationTriangle} from "react-icons/fa";
import Loader from "./Loader.tsx";

export default function Home() {
    const {isLoading, error, products} = useRootSelector((state: RootState) => state.products);
    useProductFilter();

    if (error) {
        return (
            <div className='flex justify-center items-center h-[200px] mt-4'>
                <FaExclamationTriangle className='text-slate-800 text-3xl mr-2'/>
                <span className='text-slate-800 font-medium text-lg'>
                    {error}
                </span>
            </div>
        )
    }

    return (
        <div className="lg:px-14 sm:px-8 px-4">
            <div className={'py-6'}>
                <HeroBanner/>
            </div>
            <div className={'py-6'}>
                <div className='text-center justify-center'>
                    <h1 className='text-3xl font-bold text-slate-800'>
                        Products
                    </h1>
                    <span className={'mt-3'}>
                        Discover our handpicked selection of top rated products just for you!
                    </span>
                </div>
            </div>
            {isLoading ? (
                <div className='flex justify-center items-center h-[200px] mt-4'>
                    <Loader/>
                </div>
            ) : (
                <div
                    className='mt-18 pb-6 px-15 grid 2xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-y-6 gap-x-6'>
                    {products?.slice(0, 4).map((p: ProductModel, index: number) => {
                        return <ProductCard key={index} value={p}/>
                    })}
                </div>
            )}
        </div>
    );
}