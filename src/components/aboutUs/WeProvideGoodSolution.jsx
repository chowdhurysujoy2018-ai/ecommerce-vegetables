import React from 'react'
import Button from '../../global-components/Button'
import aboutBanner from '../../assets/images/about_us.webp'

const WeProvideGoodSolution = () => {
  return (
    <section className='py-20' style={{ backgroundImage: `url(${aboutBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
            <div className='p-15 ml-auto bg-[#f5f5f5] rounded-2xl w-full max-w-[500px]'>
                <h2 className='text-4xl font-bold'>We provided good solutions ranmised</h2>
                <p className='my-6 text-gray-500'>All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true</p>
                <Button btnText="Read Continue" 
                btnClr="bg-(--primary-color) text-white !mt-0"/>
                
            </div>
        </div>
    </section>
  )
}

export default WeProvideGoodSolution