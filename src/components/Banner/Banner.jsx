


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bgimg2 from '../../assets/2.avif';
import bgimg3 from '../../assets/3.avif';
import bgimg4 from '../../assets/4.avif';
import bgimg5 from '../../assets/restaurant-interior_1.avif';
import Slide from './slide';


export default function Carousel() {
  return (
    <div className='container px-2  lg:px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

            <Slide image={bgimg2} 
             text='Get Your Food and Enjoy yourselves'
            />
        </SwiperSlide>
        <SwiperSlide>

            <Slide  image={bgimg3}
             text='Your Satisfaction is Our Top Most Priority'
            />
        </SwiperSlide>
        <SwiperSlide>

            <Slide image={bgimg4}
             text='Come to Our Resturent and Eat comfortably'
            />
        </SwiperSlide>
        <SwiperSlide>

            <Slide image={bgimg5}
             text='Come to Our Resturent and Eat comfortably'
            />
        </SwiperSlide>
      
    
      
      </Swiper>
    </div>
  );
}