import {Swiper, SwiperSlide} from "swiper/react";
import {Banners as banners} from "../customData/CustomData.ts"
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {Link} from "react-router-dom";

const colors = ['bg-yellow-400', 'bg-red-500', 'bg-green-500', 'bg-purple-600'];

export default function HeroBanner() {
    return (
        <div className='py-2 rounded-lg'>
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                pagination={{clickable: true}}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}>
                {banners.map((banner, index) =>
                    <SwiperSlide key={index}>
                        <div className={`flex justify-center gap-30 items-center carousel-item rounded-lg sm:h-[500px] ${colors[Math.floor(Math.random() * 4)]}`}>
                            <div className={'flex'}>
                                <div className={'text-center justify-center ms-30'}>
                                    <h3 className={'text-3xl text-white'}>
                                        {banner.title}
                                    </h3>
                                    <h1 className={'text-white text-2xl font-bold mt-2'}>
                                        {banner.subtitle}
                                    </h1>
                                    <p className={'text-white font-bold text'}>
                                        {banner.description}
                                    </p>
                                    <Link
                                        className={'mt-6 inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900'}
                                        to={"/products"}>
                                        Shop
                                    </Link>
                                </div>
                            </div>
                            <div className={'flex items-center mx-15 w-fit'}>
                                <img src={banner.image} alt={banner.title}/>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

