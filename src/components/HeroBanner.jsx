import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import bannerWaterMark from "../assets/images/hero-banner-bg.jpg"

import "swiper/css";
import Button from "../global-components/Button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const banners = [
    {
      id: 1,
      title: "Ripened right, delivered fresh",
      button: "Shop Now",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200",
      tag: "Best Seller",
    },
    {
      id: 2,
      title: "Fresh vegetables at your doorstep",
      button: "Order Now",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200",
      tag: "Organic",
    },
  ];

  return (
    <section className="bg-[#f5f7f6] py-16 h-188 flex items-center bg-cover bg-center"
    style={{ backgroundImage: `url(${bannerWaterMark})` }}
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 gap-10">
              
              {/* TEXT */}
              <div className="max-w-xl animate-slideUp">
                <h1 className="text-4xl lg:text-7xl font-bold text-gray-800">
                  {item.title}
                </h1>
                <Link to="/shop"><Button btnText={`${item.button}`} btnClr="bg-(--primary-color) text-white"/></Link>
              </div>
              {/* IMAGE */}
              <div className="relative animate-zoomIn">
                <img
                  src={item.image}
                  className="w-125 lg:w-150 rounded-4xl"
                  alt=""
                />

                <div className="absolute top-5 left-5 bg-white border-2 border-(--primary-color) text-(--primary-color) px-4 py-2 rounded-full">
                  {item.tag}
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;