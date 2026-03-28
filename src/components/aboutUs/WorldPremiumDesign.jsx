import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faFeather,
  faClock,
  faShieldAlt,
  faHeadset,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons"; 
import GlobalHeader from '../../global-components/GlobalHeader';
const WorldPremiumDesign = () => {
return (
    <section className='bg-[#f5f5f5] py-20'>
        <div className="container">
            <div className='grid grid-cols-3 gap-x-6 items-center'>
                <div>
                    <GlobalHeader headerText="World's premium design brands" />
                    <p>Contrary to popular belief, lorem Ipsum is not simply random text it has roots in a piece of classical latin literature from</p>
                    <p>Looked up one of the more obscure latin words consectetur, from a passage word design.</p>
                </div>
                <div>
                    <img src="https://qx-zesto.myshopify.com/cdn/shop/files/about_us_small_banner.jpg?v=1765514358&width=500" alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-x-5 items-baseline'>
                        <span className='text-3xl'>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        <div>
                            <h3 className='text-[18px] font-bold mb-2'>Soft fabric</h3>
                            <p className='text-gray-500'>Get complimentary ground shipping everyorder don’t love it send it back.</p>
                        </div>
                    </div>
                    <div className='flex gap-x-5 items-baseline'>
                        <span className='text-3xl'>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        <div>
                            <h3 className='text-[18px] font-bold mb-2'>Lightweight</h3>
                            <p className='text-gray-500'>Join freezy rewards earn gift cards enjoy exclusive member benefits.</p>
                        </div>
                    </div>
                    <div className='flex gap-x-5 items-baseline'>
                        <span className='text-3xl'>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        <div>
                            <h3 className='text-[18px] font-bold mb-2'>All day comfort</h3>
                            <p className='text-gray-500'>We believe getting dressed should be theeasiest part of your day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default WorldPremiumDesign