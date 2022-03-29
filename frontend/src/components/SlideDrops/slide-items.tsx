
import { Swiper, SwiperSlide } from 'swiper/react';

import drop1 from 'assets/branco.png';
import drop2 from 'assets/CAM CROPPED TWINS.png';
import drop3 from 'assets/camiseta cropped chain refletiva.png';
import drop4 from 'assets/saia de grade preta.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination } from 'swiper';


function SlidesItems() {
    return (
      <div className='swiper-container-promo'>
                <div className='navigation-slide-items-prev-promo'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>
        </div>
        <div className='navigation-slide-items-next-promo'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
        </div>
        <Swiper className='swiper-promo'
      modules={[Pagination, Navigation]}
      navigation={{
        prevEl: ".navigation-slide-items-prev-promo",
        nextEl: ".navigation-slide-items-next-promo",
      }}
      direction='horizontal'
      spaceBetween={0}
      slidesPerView={3}
      loop
      autoHeight
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        600: {
          slidesPerView: 2
        },
        // when window width is >= 640px
        800: {
          slidesPerView: 3
        },
        1200:{
          slidesPerView: 4
        }
      }
      }
    >
      <SwiperSlide className='slider-promo'><img src={drop1} /></SwiperSlide>
      <SwiperSlide className='slider-promo'><img src={drop2} /></SwiperSlide>
      <SwiperSlide className='slider-promo'><img src={drop3} /></SwiperSlide>
      <SwiperSlide className='slider-promo'><img src={drop4} /></SwiperSlide>
    </Swiper>
      </div>
    );
}



export default SlidesItems;