import React from "react";
import GlobalHeader from '../global-components/GlobalHeader'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useProducts from "../hooks/useProducts";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./productCard";

const FreshProduct = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  return (
    <section className='py-10'>
      <div className="container">
        <GlobalHeader headerText="Fresh products" headDirec="text-center mb-15"/>
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={false}
            pagination={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products?.slice(20, 30).map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  productIamge={product.image}
                  productAltName={product.name}
                  productName={product.name}
                  productDesciption={product.description}
                  productPrice={product.price}
                  isproductStock={product.inStock ? 'In Stock' : 'Out of Stock'}
                  productStockClr={product.inStock}
                  btnText="Add to Cart"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FreshProduct;