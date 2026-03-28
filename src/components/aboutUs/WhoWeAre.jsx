import React from 'react'
import GlobalHeader from '../../global-components/GlobalHeader'

import clientImgOne from '../../assets/images/our-team-1.webp'
import clientImgTwo from '../../assets/images/our-team-2.webp'
import clientImgThree from '../../assets/images/our-team-3.webp'
import clientImgFour from '../../assets/images/our-team-4.webp'

const WhoWeAre = () => {
  return (
    <section className='py-20'>
        <div className="container">
            <GlobalHeader headerText="Who we are" headDirec="text-center mb-15"/>
            <div className='grid grid-cols-4 gap-8'>
                <div>
                    <div className='rounded-sm overflow-hidden'>
                        <img src={clientImgOne} alt="Client 1" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mt-4'>John Doe</h3>
                        <p className='text-gray-500'>CEO, Company Name</p>
                    </div>
                </div>
                <div>
                    <div className='rounded-sm overflow-hidden'>
                        <img src={clientImgTwo} alt="Client 2" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mt-4'>John Doe</h3>
                        <p className='text-gray-500'>CEO, Company Name</p>
                    </div>
                </div>
                <div>
                    <div className='rounded-sm overflow-hidden'>
                        <img src={clientImgThree} alt="Client 3" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mt-4'>John Doe</h3>
                        <p className='text-gray-500'>CEO, Company Name</p>
                    </div>
                </div>
                <div>
                    <div className='rounded-sm overflow-hidden'>
                        <img src={clientImgFour} alt="Client 4" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mt-4'>John Doe</h3>
                        <p className='text-gray-500'>CEO, Company Name</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre
