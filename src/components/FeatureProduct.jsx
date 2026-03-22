import React from "react";
import GlobalHeader from '../global-components/GlobalHeader'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useProducts from "../hooks/useProducts";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./productCard";

const FeatureProduct = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  return (
    <section className='py-20'>
      <div className="container">
        <GlobalHeader headerText="Feature products" headDirec="text-center"/>
        <div className="w-full px-6 py-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={false}
            pagination={true}
            autoplay={{ delay: 2500 }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products?.slice(32, 40).map((product) => (
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

export default FeatureProduct;