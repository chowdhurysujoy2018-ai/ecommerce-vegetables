import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faHeart, faBagShopping, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {

  const { cartItems } = useCart();
  const { user } = useAuth();
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <section className='sticky top-0 bg-white z-10'>
      <div className="container flex items-center justify-between">
        <nav className='max-w-137.5 w-full'>
          <ul className='flex gap-x-10 font-semibold uppercase'>
            <li className='relative py-11'><Link to="/">Home</Link></li>
            <li className='relative py-11 group'>
              <Link to="/shop" className='flex items-center gap-x-1.5'>Shop <span className='text-[14px]'><FontAwesomeIcon icon={faChevronDown} /></span></Link>
              <ul className='absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 top-full left-0 bg-white px-6 py-8 font-normal capitalize min-w-50 flex flex-col gap-2'>
                <li><Link to="/shop">Shop Grid</Link></li>
                <li><Link to="/shop">Shop List</Link></li>
                <li><Link to="/shop">Shop Details</Link></li>
              </ul>
            </li>
            <li className='relative py-11'>
              <Link to="/blog">Blog</Link>
            </li>
            <li className='relative py-11 group'>
              <Link to="#" className='flex items-center gap-x-1.5'>Pages <span className='text-[14px]'><FontAwesomeIcon icon={faChevronDown} /></span></Link>
              <ul className='absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 top-full left-0 bg-white px-6 py-8 font-normal capitalize min-w-50 flex flex-col gap-2'>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faqs">Faqs</Link></li>
                <li><Link to="/return-policy">Return Policy</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/payment-policy">Payment Policy</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <Link to="/" className='flex-1 flex justify-center'>
          <img src={logo} alt="Logo" className='max-h-20' />
        </Link>
        <div className="flex items-center justify-end gap-4 max-w-137.5 w-full">
          <div className='flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3'>
            <input type="search" placeholder="Search Product..." className='focus:outline-none' />
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <div className='flex gap-x-7'>
            {user && Object.keys(user).length > 0 ? (
              <Link to="/logout" className='flex items-center hover:text-(--primary-color)'>
                <span className='border border-gray-200 rounded-full h-9 inline-flex items-center justify-center w-9 mr-2.5'><FontAwesomeIcon icon={faUser} /></span>Logout
              </Link>
            ) : (
              <Link to="/login" className='flex items-center hover:text-(--primary-color)'>
                <span className='border border-gray-200 rounded-full h-9 inline-flex items-center justify-center w-9 mr-2.5'><FontAwesomeIcon icon={faUser} /></span>Login
              </Link>
            )}
            {/* <Link to="/cart" className='flex items-center'>
              <span className='border border-gray-200 rounded-full h-9 inline-flex items-center justify-center w-9'><FontAwesomeIcon icon={faHeart} /></span><span className='inline-flex item-center justify-center h-6 w-6 bg-(--primary-color) rounded-full -ml-1 text-white'>0</span>
            </Link> */}

            <Link to="/cart" className='flex items-center relative'>
              <span className='border border-gray-200 rounded-full h-9 w-9 inline-flex items-center justify-center'>
                <FontAwesomeIcon icon={faBagShopping} />
              </span>

              {totalItems > 0 && (
                <span className='absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-(--primary-color) rounded-full text-white text-xs'>
                  {totalItems}
                </span>
              )}
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Header