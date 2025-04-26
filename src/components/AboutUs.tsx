import {useRootDispatch, useRootSelector} from "../store/Hooks.ts";
import {RootState} from "../store/ConfigStore.ts";
import {FaExclamationTriangle} from "react-icons/fa";
import Loader from "./Loader.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {fetchAllCategories} from "../api/CategoryAPIs.ts";

export default function AboutUs() {
    const categoryState = useRootSelector((state: RootState) => state.categories);
    const dispatcher = useRootDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatcher(fetchAllCategories());
    }, [dispatcher]);

    if (categoryState.error) {
        return (
            <div className="flex justify-center items-center h-[200px] mt-4">
                <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                <span className="text-slate-800 font-medium text-lg">
                    {categoryState.error}
                </span>
            </div>
        );
    }

    if (categoryState.isLoading) {
        return (
            <div className="flex justify-center items-center h-[200px] mt-4">
                <Loader/>
            </div>
        );
    }

    return (
        <div>
            <h1 className="flex justify-center mt-5 text-5xl font-bold text-slate-800">
                About Us
            </h1>
            <div className="flex pt-10 mx-20 justify-center items-center lg:flex-row flex-col mt-10">
                <p className="text-center text-lg me-20 text-slate-800 font-medium justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid
                    cupiditate doloribus, dolorum ducimus eos esse fugit odit praesentium quis sunt vitae?
                    Expedita facere iste iusto minus possimus sunt.
                </p>
                <img
                    className="w-125 rounded-lg transform duration-150 translate ease-out hover:scale-105"
                    src="https://embarkx.com/sample/placeholder.png"
                    alt="placeholder"
                />
            </div>

            <div className={'px-15'}>
                <h1 className="flex justify-center pt-16 text-5xl font-bold text-slate-800">
                    Our Products
                </h1>

                <div onClick={() => {navigate('/products')}}
                     className={'flex mb-10 shadow-2xl rounded-lg shadow-sm overflow-hidden px-10 py-5'}>
                    <Swiper
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        slidesPerView={3}
                        modules={[Pagination, Navigation, Autoplay, EffectFade]}
                        pagination={{clickable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {categoryState.categories?.map((item, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center mt-10">
                                <img
                                    className={'w-125 rounded transform duration-150 translate ease-out hover:scale-105'}
                                    src="https://embarkx.com/sample/placeholder.png" alt=""/>
                                <div className={' text-center mt-5 items-center text-2xl text-slate-800 font-medium'}>
                                    {item.name}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
