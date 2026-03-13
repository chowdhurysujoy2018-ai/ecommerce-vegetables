import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faTruck } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  return (
    <section className="py-3 bg-(--primary-color)">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-[16px] text-white"><FontAwesomeIcon icon={faPhone} className='mr-1.5'/> +1 234 567 890</span>
                    <span className="text-[16px] text-white"><FontAwesomeIcon icon={faEnvelope} className='mr-1.5'/> info@vegetablestore.com</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[16px] text-white"><FontAwesomeIcon icon={faTruck} className='mr-1.5'/> Free Shipping on Orders Over $50</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopBar