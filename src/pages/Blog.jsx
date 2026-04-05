import React from 'react'
import InsideHeroBanner from '../components/InsideHeroBanner'
import useBlogs from "../hooks/vegetableBlogs";
import { Link } from 'react-router-dom';
import RecentPostBlogItem from '../components/RecentPostBlogItem';

const Blog = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div className="text-center p-8">Loading Blogs...</div>;
  }

  console.log(blogs)

  return (
    <>
      <InsideHeroBanner />
      <section className='py-20'>
        <div className="container">
          <div className='flex flex-wrap gap-x-7'>
              <div className="w-[calc(25%-14px)] sticky top-4">
                <div>
                    <h4 className='mb-3 text-[18px] font-semibold'>Recent post</h4>
                    <div className='max-h-100 overflow-y-auto'>
                        {blogs?.slice(0, 35).map((blog) => (
                          <RecentPostBlogItem key={blog.id} blogId={blog.id} productImg={blog.image} productTitle={blog.shortDesc.slice(0, 15)} productPublishedDate={blog.date}/>
                        ))} 
                        
                    </div>
                </div>
                <div className='mt-10 border-t border-gray-100 pt-5'>
                    <h4 className='mb-3 text-[18px] font-semibold'>Products Tags</h4>
                    <ul className='max-h-150 overflow-y-auto flex flex-wrap gap-2.5'>
                        {[...new Set(blogs?.map((blog) => blog.category))]
                          .slice(0, 25)
                          .map((category, index) => (
                            <li key={index}>
                              <Link to="#" className='bg-(--primary-color) inline-flex text-white px-5 py-1.5 rounded-2xl'>{category}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-x-7 gap-y-7 w-[calc(75%-15px)]'>
                {blogs?.slice(0, 30).map((blog) => (
                  <div key={blog.id}>
                    <div className="rounded">
                      <div>
                        <div className='relative rounded-md overflow-hidden mb-4'>
                          <img src={blog.image} alt={blog.author}  className='aspect-video object-cover'/>
                          <div className='flex px-3.5 py-3 justify-between bg-(--primary-color) text-white'>
                            <h5>{blog.author}</h5>
                            <span>{blog.date}</span>
                          </div>
                        </div>
                        <h4 className='font-bold text-[17px]'>{blog.shortDesc.slice(0, 40)}...</h4>
                        <p className='my-3.5 text-gray-500'>{blog.content.slice(0, 105)}...</p>
                        <Link to={`/blog/${blog.id}`}
                          className="mt-auto block w-full uppercase underline text-(--primary-color) font-medium">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog