import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import useProducts from "../hooks/useProducts";
import GlobalHeader from "../global-components/GlobalHeader";

import "swiper/css";
import "swiper/css/navigation";

const CustomerReview = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <p className="text-center py-10">Loading reviews...</p>;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <GlobalHeader 
          headerText="Customer Review" 
          headDirec="text-center" 
        />

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation = {false}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop = {false}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products?.slice(0, 20).map((item) => {
            
            const review = item.reviews?.[0]; // first review

            return (
              <SwiperSlide key={item.id}>
                
                <div className="bg-white p-5 rounded-2xl transition duration-300">
                  <div className="flex gap-x-4">
                    <span>
                      <img
                      src={item.image}
                      alt={item.name}
                      className="w-12.5 h-12.5 object-cover rounded-lg"
                    />
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-(--primary-color) font-bold">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                   <p className="mt-3 text-md text-gray-600 border-t border-gray-300 pt-5 mt-2">
                    "{review?.comment || "Very good product!"}"
                  </p>
                  <div className="flex gap-x-2 items-center mt-3">
                    <div className="w-8 h-8 bg-(--primary-color) text-white flex items-center justify-center rounded-full text-sm">
                      {review?.userName?.charAt(0) || "C"}
                    </div>

                    <p className="text-sm font-medium text-gray-700 my-4">
                      {review?.userName || "Customer"}
                    </p>
                  </div>                 
                   <div className="flex text-yellow-400 text-2xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>
                        {i < (review?.rating || 5) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>

              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReview;