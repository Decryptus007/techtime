import React from 'react';
import Container from './Container';
import ReviewCard from './ReviewCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

function ReviewSection() {
  return (
    <Container>
      <div className="py-[32px] relative lg:py-[80px]">
        <div className="w-full text-center">
          <h2 className="text-center">what our clients are saying</h2>
          <span className="block text-center mx-auto w-[282.11px] lg:w-[743px]">
            high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image
          </span>
        </div>
        <div className="mt-8 lg:mt-12">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {[0, 0, 0, 0].map((_, itr) => (
              <SwiperSlide key={itr}>
                <ReviewCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default ReviewSection;