import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../global-components/Button';

const InstaFeed = () => {
  return (
    <section className='py-20'>
      <div class="container">
        <div class="flex items-center gap-6">
          <div class="flex flex-col items-center text-center gap-6 max-w-1/2">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <h2 class="text-3xl font-bold text-center">#Zesto on Instagram</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti perferendis, fuga vitae aspernatur similique ea adipisci dolorum cumque dolorem nihil quos nesciunt quas, excepturi perspiciatis in alias dolor reprehenderit!</p>
            <Button btnText="SHOP NOW" btnClr="bg-(--primary-color) text-white transition !mt-0"/>
          </div>
          <div className='grid grid-cols-2 gap-4 max-w-1/2'>
            <div className='rounded overflow-hidden relative group'>
              <img src="https://qx-zesto.myshopify.com/cdn/shop/files/instagram_1_pic.jpg?v=1765442295&width=1200" alt="Instagram Post 1" className='w-full h-full object-cover'/>
              <div className='absolute top-0 left-0 w-full h-full bg-[#0003]'></div>
              <FontAwesomeIcon icon={faInstagram} size="2x" className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'/>
            </div>
            <div className='rounded overflow-hidden relative group'>
              <img src="https://qx-zesto.myshopify.com/cdn/shop/files/instagram_2_pic.jpg?v=1765442715&width=1200" alt="Instagram Post 1" className='w-full h-full object-cover'/>
              <div className='absolute top-0 left-0 w-full h-full bg-[#0003]'></div>
              <FontAwesomeIcon icon={faInstagram} size="2x" className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'/>
            </div>
            <div className='rounded overflow-hidden relative group'>
              <img src="https://qx-zesto.myshopify.com/cdn/shop/files/instagram_3_pic.jpg?v=1765442732&width=1200" alt="Instagram Post 1" className='w-full h-full object-cover'/>
              <div className='absolute top-0 left-0 w-full h-full bg-[#0003]'></div>
              <FontAwesomeIcon icon={faInstagram} size="2x" className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'/>
            </div>
            <div className='rounded overflow-hidden relative group'>
              <img src="https://qx-zesto.myshopify.com/cdn/shop/files/instagram_4_pic.jpg?v=1765442748&width=1200" alt="Instagram Post 1" className='w-full h-full object-cover'/>
              <div className='absolute top-0 left-0 w-full h-full bg-[#0003]'></div>
              <FontAwesomeIcon icon={faInstagram} size="2x" className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'/>
            </div>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstaFeed