// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';


const HomeBanner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >
                <SwiperSlide>
                    <div id="slide1" className="carousel-item w-full">
                        <img src="https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg" className="w-full h-[80vh] object-cover" />
                        <div className="flex flex-col justify-center items-center absolute w-full bg-gradient-to-r from-slate-700 h-full">
                            <h3 className='text-3xl text-center text-white font-bold'>Make the place luxury</h3>
                            <h3 className='text-3xl text-center text-white font-bold'>Give the place luxury</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item w-full">
                        <img src="https://cdn.pixabay.com/photo/2022/10/02/05/34/city-7492749_960_720.jpg" className="w-full h-[80vh] object-cover" />
                        <div className="flex flex-col justify-center items-center absolute w-full bg-gradient-to-r from-slate-700 h-full">
                            <h3 className='text-3xl text-center text-white font-bold'>Make the place luxury</h3>
                            <h3 className='text-3xl text-center text-white font-bold'>Give the place luxury</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item w-full">
                        <img src="https://cdn.pixabay.com/photo/2018/09/25/09/17/sale-3701777_1280.jpg" className="w-full h-[80vh] object-cover" />
                        <div className="flex flex-col justify-center items-center absolute w-full bg-gradient-to-r from-slate-700 h-full">
                            <h3 className='text-3xl text-center text-white font-bold'>Make the place luxury</h3>
                            <h3 className='text-3xl text-center text-white font-bold'>Give the place luxury</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item w-full">
                        <img src="https://cdn.pixabay.com/photo/2021/12/05/02/33/real-estate-6846355_1280.jpg" className="w-full h-[80vh] object-cover" />
                        <div className="flex flex-col justify-center items-center absolute w-full bg-gradient-to-r from-slate-700 h-full">
                            <h3 className='text-3xl text-center text-white font-bold'>Make the place luxury</h3>
                            <h3 className='text-3xl text-center text-white font-bold'>Give the place luxury</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default HomeBanner;