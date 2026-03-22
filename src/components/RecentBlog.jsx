import React from 'react'
import GlobalHeader from '../global-components/GlobalHeader'

const RecentBlog = () => {
  return (
    <section className='py-20'>
      <div className="container">
        <GlobalHeader 
          headerText="Recent Blogs" 
          headDirec="text-center" 
        />
      </div>
    </section>
  )
}

export default RecentBlog