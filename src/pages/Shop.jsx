import React, { useState, useMemo } from 'react';
import useProducts from "../hooks/useProducts";
import ProductCard from '../components/ProductCard';

const Shop = () => {

  const { products, loading } = useProducts();

  // ✅ FILTER STATE
  const [filters, setFilters] = useState({
    category: '',
    inStock: false,
    priceRange: [0, 100],
    weights: [],
    origins: []
  });

  // ✅ CATEGORY
  const categories = useMemo(() => {
    return [...new Set(products.map(p => p.category))];
  }, [products]);

  // ✅ WEIGHT
  const weights = useMemo(() => {
    return [...new Set(products.map(p => p.weight).filter(Boolean))];
  }, [products]);

  // ✅ ORIGIN
  const origins = useMemo(() => {
    return [...new Set(products.map(p => p.origin).filter(Boolean))];
  }, [products]);

  // ✅ HANDLE WEIGHT
  const handleWeightChange = (weight) => {
    setFilters((prev) => {
      const exists = prev.weights.includes(weight);

      return {
        ...prev,
        weights: exists
          ? prev.weights.filter(w => w !== weight)
          : [...prev.weights, weight]
      };
    });
  };

  // ✅ HANDLE ORIGIN
  const handleOriginChange = (origin) => {
    setFilters((prev) => {
      const exists = prev.origins.includes(origin);

      return {
        ...prev,
        origins: exists
          ? prev.origins.filter(o => o !== origin)
          : [...prev.origins, origin]
      };
    });
  };

  // ✅ FILTER LOGIC
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {

      // CATEGORY
      const matchCategory =
        !filters.category ||
        product.category.toLowerCase().includes(filters.category.toLowerCase());

      // STOCK
      const matchStock =
        !filters.inStock || product.inStock === true;

      // PRICE
      const matchPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      // WEIGHT
      const matchWeight =
        filters.weights.length === 0 ||
        filters.weights.includes(product.weight);

      // ORIGIN
      const matchOrigin =
        filters.origins.length === 0 ||
        filters.origins.includes(product.origin);

      return matchCategory && matchStock && matchPrice && matchWeight && matchOrigin;
    });
  }, [products, filters]);

  // ✅ LOADING
  if (loading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  return (
    <section className='py-20'>
      <div className="container mx-auto p-6">
        <div className='flex gap-x-7'>

          {/* ================= LEFT SIDEBAR ================= */}
          <div className='w-[calc(25%-15px)] space-y-6'>

            {/* CATEGORY */}
            <div>
              <h5 className="text-xl font-bold mb-4">Categories</h5>
              <select
                className="w-full border p-2 rounded"
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
              >
                <option value="">All</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* AVAILABILITY */}
            <div>
              <h5 className="text-xl font-bold mb-4">Availability</h5>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) =>
                    setFilters({ ...filters, inStock: e.target.checked })
                  }
                />
                In Stock Only
              </label>
            </div>

            {/* PRICE */}
            <div>
              <h5 className="text-xl font-bold mb-4">Price</h5>
              <input
                type="range"
                min="0"
                max="100"
                value={filters.priceRange[1]}
                className="w-full"
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    priceRange: [0, Number(e.target.value)],
                  })
                }
              />
              <p className="mt-2">Up to ${filters.priceRange[1]}</p>
            </div>

            {/* WEIGHT FILTER */}
            <div>
              <h5 className="text-xl font-bold mb-4">Weight</h5>
              <div className="space-y-2">
                {weights.map((weight, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.weights.includes(weight)}
                      onChange={() => handleWeightChange(weight)}
                    />
                    {weight}
                  </label>
                ))}
              </div>
            </div>

            {/* ORIGIN FILTER */}
            <div>
              <h5 className="text-xl font-bold mb-4">Origin</h5>
              <div className="space-y-2">
                {origins.map((origin, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.origins.includes(origin)}
                      onChange={() => handleOriginChange(origin)}
                    />
                    {origin}
                  </label>
                ))}
              </div>
            </div>

            {/* CLEAR FILTER */}
            <button
              onClick={() =>
                setFilters({
                  category: '',
                  inStock: false,
                  priceRange: [0, 100],
                  weights: [],
                  origins: []
                })
              }
              className="bg-black text-white px-4 py-2 rounded w-full"
            >
              Clear Filters
            </button>

          </div>

          {/* ================= RIGHT PRODUCTS ================= */}
          <div className='w-[calc(75%-15px)]'>

            <h5 className="text-xl font-bold mb-6">
              Products ({filteredProducts.length})
            </h5>

            {filteredProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    productId={product.id}
                    productIamge={product.image}
                    productAltName={product.name}
                    productName={product.name}
                    productDescription={product.description}
                    productPrice={product.price}
                    isproductStock={product.inStock ? 'In Stock' : 'Out of Stock'}
                    productStockClr={product.inStock}
                    btnText="Add to Cart"
                  />
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Shop;