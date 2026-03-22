import React from "react";
import GlobalHeader from "../global-components/GlobalHeader";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";

const ChoooseEnjoyCategory = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <section className="py-20">
        <div className="container text-center">
          <p>Loading categories...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container text-center text-red-500">
          <p>Failed to load categories</p>
        </div>
      </section>
    );
  }

  // ✅ Unique categories
  const categories = [
    ...new Map(
      products.map((item) => [item.category, item])
    ).values(),
  ];

  return (
    <section className="py-20">
      <div className="container">
        <GlobalHeader
          headerText="Choose & enjoy!"
          headDirec="text-center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
          
          {categories.slice(0, 6).map((item) => {
            
            // ✅ Count products per category
            const count = products.filter(
              (p) => p.category === item.category
            ).length;

            return (
              <Link to="/shop">
                <div
                  key={item.category}
                  className="group bg-white rounded-2xl text-center cursor-pointer 
                  transition duration-300"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.category}
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-[20px] font-semibold text-gray-800">
                    {item.category}
                  </h3>

                  {/* ✅ Category Count */}
                  <p className="text-md font-bold text-(--primary-color) mt-1">
                    {count} items
                  </p>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ChoooseEnjoyCategory;