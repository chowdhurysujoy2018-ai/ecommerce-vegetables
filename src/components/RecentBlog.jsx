import React from 'react'
import GlobalHeader from '../global-components/GlobalHeader'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useBlogs from "../hooks/vegetableBlogs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const RecentBlog = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div className="text-center p-8">Loading Blogs...</div>;
  }

  return (
    <section className='py-20'>
      <div className="container">
        <GlobalHeader 
          headerText="Recent Blogs" 
          headDirec="text-center"/>

        <div className="w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={false}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {blogs?.slice(0, 35).map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="rounded">
                  <div>
                    <div className='relative rounded-md overflow-hidden mb-4'>
                      <img src={blog.image} alt={blog.author}  className='aspect-video object-cover'/>
                      <div className='flex px-3.5 py-3 justify-between bg-(--primary-color) text-white'>
                        <h5>{blog.author}</h5>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    <h4 className='font-bold text-[17px]'>{blog.shortDesc.slice(0, 40)}...</h4>
                    <p className='my-3.5 text-gray-500'>{blog.content.slice(0, 105)}...</p>
                    <Link to={`/blog/${blog.id}`} className='mt-auto block w-full uppercase underline text-(--primary-color) font-medium'>Read More</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default RecentBlog;