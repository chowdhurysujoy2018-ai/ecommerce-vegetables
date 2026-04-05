import React, { useState } from 'react' // ✅ useState added
import Button from '../global-components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

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
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [showLoginMsg, setShowLoginMsg] = useState(false); // ✅ toast state

  const product = {
    id: productId ?? productName,
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
          <span className="text-[20px] font-bold text-(--primary-color)">
            ${productPrice}
          </span>

          <span className={`text-sm ${productStockClr ? 'text-(--primary-color)' : 'text-red-600'}`}>
            {isproductStock}
          </span>
        </div>

        {/* ✅ LOGIN TOAST */}
        {showLoginMsg && (
          <div className="w-full mt-2 text-sm text-white bg-red-500 px-3 py-2 rounded-md text-center animate-pulse">
            🔒 Please login first to add items to cart!
          </div>
        )}

        {/* BUTTON */}
        <Button
          btnText={btnText || "Add to Cart"}
          btnIcon={faShoppingBasket}
          btnClr="bg-[var(--primary-color)] text-white !mt-3"
          onClick={() => {
            if (!user || Object.keys(user).length === 0) {
              setShowLoginMsg(true); // ✅ show toast
              setTimeout(() => {
                setShowLoginMsg(false);
                navigate('/login', { state: { from: location.pathname } });
              }, 1500); // ✅ wait 1.5s then redirect
              return;
            }
            addToCart(product);
          }}
        />

      </div>
    </div>
  )
}

export default ProductCard;