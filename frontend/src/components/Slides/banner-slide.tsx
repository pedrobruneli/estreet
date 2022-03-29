import banner from 'assets/banners/banner 1.jpg';
import banner1 from 'assets/banners/banner 2.jpg';
import banner2 from 'assets/banners/banner 3.jpg';
import banner3 from 'assets/banners/banner 4.jpg';
import banner4 from 'assets/banners/banner 5.jpg';
import { Autoplay,EffectFade, Pagination } from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css/effect-fade"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './banner-slide-style.css';


function BannerSlides() {
    return(
        <div className='banner-container'>
            <Swiper className='swiper-banners'
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            effect={"fade"}
            pagination={{
                clickable: true,
            }}
            loop
            speed={2000}
            slidesPerView={1}
            modules={[Autoplay,EffectFade, Pagination]}>
                <SwiperSlide className='swiper-slide-banners'>
                    <img src={banner} />
                </SwiperSlide>
                <SwiperSlide  className='swiper-slide-banners'>
                    <img src={banner1} />
                </SwiperSlide>
                <SwiperSlide  className='swiper-slide-banners'>
                    <img src={banner2} />
                </SwiperSlide >
                <SwiperSlide  className='swiper-slide-banners'>
                    <img src={banner3} />
                </SwiperSlide >
                <SwiperSlide  className='swiper-slide-banners'>
                    <img src={banner4} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BannerSlides;