import React from 'react'
import GlobalHeader from '../global-components/GlobalHeader'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTruck, 
  faFaceSmile, 
  faRotateLeft, 
  faShieldHalved 
} from "@fortawesome/free-solid-svg-icons";

const OurServicesInfo = () => {
  return (
    <section className='py-20'>
      <div className="container">
        <GlobalHeader headerText="Our services" headDirec="text-center mb-15"/>
        <div className='grid grid-cols-4 gap-x-6'>
            <div className='text-center bg-[#f5f5f5] p-11'>
              <span className='bg-(--primary-color) w-18 h-18 inline-flex items-center justify-center rounded-full text-white'>
                <FontAwesomeIcon icon={faTruck} size="2x" />
              </span>
              <h4 className='mt-3 text-2xl font-medium mb-2'>Free delivery</h4>
              <p className='text-gray-400'>From $50</p>
            </div>
            <div className='text-center bg-[#f5f5f5] p-11'>
              <span className='bg-(--primary-color) w-18 h-18 inline-flex items-center justify-center rounded-full text-white'>
                <FontAwesomeIcon icon={faFaceSmile} size="2x" />
              </span>
              <h4 className='mt-3 text-2xl font-medium mb-2'>99% Customer</h4>
              <p className='text-gray-400'>Feedbacks</p>
            </div>
            <div className='text-center bg-[#f5f5f5] p-11'>
              <span className='bg-(--primary-color) w-18 h-18 inline-flex items-center justify-center rounded-full text-white'>
                <FontAwesomeIcon icon={faRotateLeft} size="2x" />
              </span>
              <h4 className='mt-3 text-2xl font-medium mb-2'>365 Days</h4>
              <p className='text-gray-400'>For free return</p>
            </div>
            <div className='text-center bg-[#f5f5f5] p-11'>
              <span className='bg-(--primary-color) w-18 h-18 inline-flex items-center justify-center rounded-full text-white'>
                <FontAwesomeIcon icon={faShieldHalved} size="2x" />
              </span>
              <h4 className='mt-3 text-2xl font-medium mb-2'>Payment</h4>
              <p className='text-gray-400'>Secure system</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurServicesInfo