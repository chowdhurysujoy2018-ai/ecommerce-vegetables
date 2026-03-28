import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import GlobalHeader from '../../global-components/GlobalHeader'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


import clientImgOne from '../../assets/images/male-client.jpg'
import clientImgTwo from '../../assets/images/female-client.avif'

import "swiper/css";
import "swiper/css/navigation";

const HappyClientSays = () => {
  return (
    <section className='bg-white py-20'>
      <div className="container">
        <GlobalHeader headerText="Happy client say" headDirec="text-center mb-20"/>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >

          <SwiperSlide>
            <div className='flex gap-x-5 items-center'>
              <span className='h-38.75 w-38.75 relative rounded-full overflow-hidden'>
                <img src={clientImgOne} alt="Client" className='w-full h-full object-cover'/>
                <span className='absolute bg-green-800 bottom-1 left-1/2 transform -translate-x-1/2 h-8 w-8 inline-flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faQuoteLeft} className='text-1xl text-white'/></span>
              </span>
              <div className='flex-1'>
                <p className='text-gray-400 mb-3.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words believable.</p>
                <h5 className='font-bold'>Richi Greany - <span className='font-light'>Student</span></h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex gap-x-5 items-center'>
              <span className='h-38.75 w-38.75 relative rounded-full overflow-hidden'>
                <img src={clientImgTwo} alt="Client" className='w-full h-full object-cover'/>
                <span className='absolute bg-green-800 bottom-1 left-1/2 transform -translate-x-1/2 h-8 w-8 inline-flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faQuoteLeft} className='text-1xl text-white'/></span>
              </span>
              <div className='flex-1'>
                <p className='text-gray-400 mb-3.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words believable.</p>
                <h5 className='font-bold'>Richi Greany - <span className='font-light'>Student</span></h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex gap-x-5 items-center'>
              <span className='h-38.75 w-38.75 relative rounded-full overflow-hidden'>
                <img src={clientImgOne} alt="Client" className='w-full h-full object-cover'/>
                <span className='absolute bg-green-800 bottom-1 left-1/2 transform -translate-x-1/2 h-8 w-8 inline-flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faQuoteLeft} className='text-1xl text-white'/></span>
              </span>
              <div className='flex-1'>
                <p className='text-gray-400 mb-3.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words believable.</p>
                <h5 className='font-bold'>Richi Greany - <span className='font-light'>Student</span></h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex gap-x-5 items-center'>
              <span className='h-38.75 w-38.75 relative rounded-full overflow-hidden'>
                <img src={clientImgTwo} alt="Client" className='w-full h-full object-cover'/>
                <span className='absolute bg-green-800 bottom-1 left-1/2 transform -translate-x-1/2 h-8 w-8 inline-flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faQuoteLeft} className='text-1xl text-white'/></span>
              </span>
              <div className='flex-1'>
                <p className='text-gray-400 mb-3.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words believable.</p>
                <h5 className='font-bold'>Richi Greany - <span className='font-light'>Student</span></h5>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}

export default HappyClientSays