import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faDollarSign, faHeadset, faRotateLeft } from "@fortawesome/free-solid-svg-icons";


const AboutProductCard = () => {
  return (
    <section className='py-20 bg-[#f5f5f5] border-t border-gray-300'>
        <div className="container">
            <div className='grid grid-cols-4 gap-8'>
                <div className='flex gap-x-4 items-center border border-gray-300 p-5'>
                    <span className='text-2xl'><FontAwesomeIcon icon={faTruck} /></span>
                    <div>
                        <h2 className='text-[18px] font-bold'>Free delivery</h2>
                        <p className='text-gray-500'>Orders over $99.00</p>
                    </div>
                </div>
                <div className='flex gap-x-4 items-center border border-gray-300 p-5'>
                    <span className='text-2xl'><FontAwesomeIcon icon={faDollarSign} /></span>
                    <div>
                        <h2 className='text-[18px] font-bold'>Free delivery</h2>
                        <p className='text-gray-500'>Orders over $99.00</p>
                    </div>
                </div>
                <div className='flex gap-x-4 items-center border border-gray-300 p-5'>
                    <span className='text-2xl'><FontAwesomeIcon icon={faHeadset} /></span>
                    <div>
                        <h2 className='text-[18px] font-bold'>Free delivery</h2>
                        <p className='text-gray-500'>Orders over $99.00</p>
                    </div>
                </div>
                <div className='flex gap-x-4 items-center border border-gray-300 p-5'>
                    <span className='text-2xl'><FontAwesomeIcon icon={faRotateLeft} /></span>
                    <div>
                        <h2 className='text-[18px] font-bold'>Free delivery</h2>
                        <p className='text-gray-500'>Orders over $99.00</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutProductCard