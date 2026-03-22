import React from 'react'
import Button from '../global-components/Button'
import naturalBannerOne from '../assets/images/organic-banner.jpg'
import naturalBannerTwo from '../assets/images/natural-banner.jpg'
const OrganicNatural = () => {
  return (
    <section className='py-10'>
      <div className="container">
        <div className='grid grid-cols-2 gap-x-5'>
          <div className='py-8 px-9 flex flex-col items-start gap-y-4 min-h-95 justify-center no-repeat position-right' style={{ backgroundImage: `url(${naturalBannerOne})` }}>
            <div className='max-w-70'>
              <h5 className='text-(--primary-color) font-semibold'>Organic</h5>
              <h3 className='text-[40px] font-bold leading-9 my-6'>The best market for fresh fruits</h3>
              <Button 
              btnText="Shop now" 
              btnClr="bg-[white] text-(--primary-color) uppercase !mt-0 font-semibold"/>
            </div>
          </div>
          <div className='py-8 px-9 flex flex-col items-start gap-y-4 min-h-95 justify-center item-center no-repeat position-right' style={{ backgroundImage: `url(${naturalBannerTwo})` }}>
            <div className='max-w-70'>
              <h5 className='text-(--primary-color) font-semibold'>Natural</h5>
              <h3 className='text-[40px] font-bold leading-9 my-6'>The best market for vegetables</h3>
              <Button 
              btnText="Shop now" 
              btnClr="bg-[white] text-(--primary-color) uppercase !mt-0 font-semibold"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrganicNatural