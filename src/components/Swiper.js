import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import './swiper.css'

export default function Slider({setcurrentSlide,touristSpots}) {
    const handleSlideChange = () => {
        const currentSlide = document.getElementsByClassName('swiper-slide-next');
        // console.log(currentSlide[0].innerText)
        setcurrentSlide(currentSlide[0]?.innerText)
    }

  return (
    <>
        <Swiper 
            slidesPerView={3}
            autoplay={{delay: 2500,disableOnInteraction: false,}} 
            spaceBetween={30} 
            slidesPerGroup={1} 
            loop={true} 
            loopFillGroupWithBlank={true} 
            navigation={{prevEl: '.prev',nextEl: '.next',}}
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
            breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
        >
            {touristSpots?.map(spot => 
                
                    <SwiperSlide key={spot?.id} className="shadow">
                        <div className='w-full z-2 relative cursor-pointer bg-black h-96 rounded-3xl'>
                            <img className='opacity-90 rounded-2xl absolute w-full h-full object-cover' src={spot?.image} alt="" />
                            <h1 className='w-full text-3xl bottom-3 left-2 absolute'>{spot?.spotName}</h1>
                        </div>
                    </SwiperSlide>
                )}
            <div className='flex gap-3 mt-5'>
                <button className='prev shadow flex items-center justify-center bg-white w-8 h-8 text-black rounded-full'>
                    <box-icon name='left-arrow-alt' ></box-icon>    
                </button>
                <button className='next shadow flex items-center justify-center bg-white w-8 h-8 text-black rounded-full'>
                    <box-icon name='right-arrow-alt' ></box-icon>
                </button>
            </div>
        </Swiper>
    </>
  );
}
