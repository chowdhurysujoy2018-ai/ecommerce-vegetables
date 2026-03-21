import React from 'react'
import ftrlogo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { 
  faInstagram, 
  faFacebookF, 
  faTwitter, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className='bg-[#f5f5f5]'>
      <div className="container">
        <div className='flex gap-x-5 py-20'>
            <div className='w-[35%] flex flex-col items-start gap-4'>
              <img src={ftrlogo} alt="" className='max-w-28'/>
              <p className='text-[#808080]'>Bringing nature’s freshest harvest of fruits and veggies straight to your home with purity, taste, and care</p>
              <ul className='flex flex-col gap-1 font-bold'>
                <li className='flex gap-x-2.5'><span><FontAwesomeIcon icon={faPhone} /></span><Link>+63 0123 456 789</Link></li>
                <li className='flex gap-x-2.5'><span><FontAwesomeIcon icon={faEnvelope} /></span><Link>demo@demo.com</Link></li>
              </ul>
              <div>
                <h5 className='font-bold mb-3'>Follow us on</h5>
                 <ul className='flex gap-2.5'>
                  <li className='flex gap-x-2.5'><Link className='bg-[#185c13] text-white rounded-full w-[40px] h-[40px] inline-flex items-center justify-center'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                  <li className='flex gap-x-2.5'><Link className='bg-[#185c13] text-white rounded-full w-[40px] h-[40px] inline-flex items-center justify-center'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                  <li className='flex gap-x-2.5'><Link className='bg-[#185c13] text-white rounded-full w-[40px] h-[40px] inline-flex items-center justify-center'><FontAwesomeIcon icon={faTwitter} /></Link></li>
                  <li className='flex gap-x-2.5'><Link className='bg-[#185c13] text-white rounded-full w-[40px] h-[40px] inline-flex items-center justify-center'><FontAwesomeIcon icon={faYoutube} /></Link></li>
                </ul>
              </div>
            </div>
            <div className='w-[15%]'>
              <h5 className='font-bold mb-3'>Quick link</h5>
              <ul className='text-[#808080] flex flex-col gap-y-2'>
                <li><Link>About us</Link></li>
                <li><Link>Contact us</Link></li>
                <li><Link>Return policy</Link></li>
                <li><Link>Payment policy</Link></li>
                <li><Link>Privacy policy</Link></li>
                <li><Link>Terms & condition</Link></li>
              </ul>
            </div>
            <div className='w-[15%]'>
              <h5 className='font-bold mb-3'>Category</h5>
              <ul className='text-[#808080] flex flex-col gap-y-2'>
                <li><Link>About us</Link></li>
                <li><Link>Contact us</Link></li>
                <li><Link>Return policy</Link></li>
                <li><Link>Payment policy</Link></li>
                <li><Link>Privacy policy</Link></li>
                <li><Link>Terms & condition</Link></li>
              </ul>
            </div>
            <div className='w-[35%]'>
              <h5 className='font-bold mb-3'>Subscribe to updates & offers</h5>
            </div>
        </div>
        <div className='py-4 text-center border-t border-[#d5d5d5] text-[#808080]'>
          <p>© 2026, Ecommerce by qodexTM</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer