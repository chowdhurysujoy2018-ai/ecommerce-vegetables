import React from 'react'
import { Link } from 'react-router-dom'
const RecentPostBlogItem = ({blogId, productImg, productTitle, productPublishedDate}) => {
  return (
    <Link to={`/blog/${blogId}`} className='flex gap-x-4 items-center py-3 border-b border-gray-100'>
        <span className='w-18 aspect-square rounded-xl overflow-hidden'>
            <img src={productImg} alt="" className='w-full h-full'/>
        </span>
        <div className='flex flex-col gap-y-1'>
            <h6 className='font-semibold'>{productTitle}</h6>
            <span className='text-(--primary-color) font-semibold'>{productPublishedDate}</span>
        </div>
    </Link>
  )
}

export default RecentPostBlogItem