import React from 'react'
import Button from '../global-components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

const ProductCard = ({
  productId,
  productIamge,
  productAltName,
  productName,
  productDesciption,
  productPrice,
  isproductStock,
  productStockClr,
  btnText
}) => {

  const { addToCart } = useCart();

  // ✅ SAFE PRODUCT OBJECT (FIXED)
  const product = {
    id: productId ?? productName,   // 🔥 fallback fix
    name: productName,
    image: productIamge,
    price: productPrice,
  };

  return (
    <div className="border border-[#f5f5f5] rounded-lg bg-[#f5f5f5] overflow-hidden shadow hover:shadow-lg transition">

      <img 
        src={productIamge} 
        alt={productAltName}
        className="w-full h-80 object-cover"
      />

      <div className="p-4 flex flex-wrap justify-between">

        {/* ⭐ RATING */}
        <ul className='w-full flex gap-x-0.5 mb-1'>
          {[...Array(5)].map((_, i) => (
            <li key={i}>
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[15px]" />
            </li>
          ))}
        </ul>

        {/* LEFT */}
        <div className='w-[60%]'>
          <h3 className="font-bold text-xl">{productName}</h3>
          <p className="text-gray-600 text-sm mt-1">{productDesciption}</p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-between flex-col flex-1 items-end">
          <span className="text-[20px] font-bold text-[var(--primary-color)]">
            ${productPrice}
          </span>

          <span className={`text-sm ${productStockClr ? 'text-[var(--primary-color)]' : 'text-red-600'}`}>
            {isproductStock}
          </span>
        </div>

        {/* BUTTON */}
        <Button 
          btnText={btnText || "Add to Cart"} 
          btnIcon={faShoppingBasket}
          btnClr="bg-[var(--primary-color)] text-white !mt-3 w-full"
          
          onClick={() => {
            console.log("ADDING:", product); // ✅ DEBUG
            addToCart(product);
          }}
        />

      </div>
    </div>
  )
}

export default ProductCard;