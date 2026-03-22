import React from 'react'
import Button from '../global-components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({productId, productIamge, productAltName, productName, productDesciption, productPrice, isproductStock, productStockClr, btnText}) => {
  
    return (
    <div key={productId} className="border border-[#f5f5f5] rounded-lg bg-[#f5f5f5] overflow-hidden shadow hover:shadow-lg transition">
        <img 
        src={productIamge} 
        alt={productAltName}
        className="w-full h-80 object-cover"
        />
        <div className="p-4 flex flex-wrap justify-between">
            <ul className='w-full flex gap-x-0.5 mb-1   '>
                <li><FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[15px]" /></li>
                <li><FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[15px]" /></li>
                <li><FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[15px]" /></li>
                <li><FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[15px]" /></li>
                <li><FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[15px]" /></li>
            </ul>
            <div className='w-[60%]'>
                <h3 className="font-bold text-xl">{productName}</h3>
                <p className="text-gray-600 text-sm mt-1">{productDesciption}</p>
            </div>
            
            <div className="flex justify-between flex-col flex-1 items-end">
                <span className="text-[20px] font-bold text(--primary-color)">
                ${productPrice}
                </span>
                <span className={`text-sm ${productStockClr ? 'text-(--primary-color)' : 'text-red-600'}`}>
                {isproductStock}
                </span>
            </div>
            <Button 
            btnText={btnText} 
            btnIcon={faShoppingBasket } 
            btnClr="bg-(--primary-color) text-white !mt-3"/>
        </div>
    </div>
  )
}

export default ProductCard