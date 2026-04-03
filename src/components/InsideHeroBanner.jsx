import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const InsideHeroBanner = () => {
  const location = useLocation();

  // Get path and convert to readable name
  const path = location.pathname.split('/').filter(Boolean);
  const currentPage = path.length > 0 
    ? path[path.length - 1].replace('-', ' ') 
    : 'Home';

  // Capitalize first letter
  const currentPageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <section
      className='h-45 flex items-center text-white'
      style={{
        backgroundImage: 'url(https://qx-zesto.myshopify.com/cdn/shop/files/main_banner_c8223a2f-af11-4d21-806f-e95dece7e1ac.jpg?v=1765452950)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className='flex justify-between gap-x-3'>
          <h1 className='text-4xl font-bold mb-4'>{currentPageName}</h1>

          <ul className='flex gap-x-3'>
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li>{currentPageName}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InsideHeroBanner