import React from "react";
import { useParams } from "react-router-dom";
import useBlogs from "../hooks/vegetableBlogs";

const BlogDetails = () => {
  const { id } = useParams(); // 👈 get id from URL
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div className="text-center p-8">Loading Blogs...</div>;
  }

  // 👇 find single blog
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center p-8">Blog Not Found</div>;
  }

  return (
    <section className="py-16">
      <div className="container max-w-3xl mx-auto">

        <div>
          <img
            src={blog.image}
            alt={blog.shortDesc}
            className="w-full rounded-md mb-4 h-150 object-cover"
          />
        </div>

        <div className="flex font-bold py-3 gap-x-4 text-(--primary-color) mb-4">
          <h5>{blog.author}</h5>
          <span>/</span>
          <span>{blog.date}</span>
        </div>

        <h2 className="text-4xl font-bold mb-3">{blog.title}</h2>

        <h4 className="font-semibold text-lg mb-3">
          {blog.shortDesc}
        </h4>

        <p className="text-gray-600 leading-relaxed">
          {blog.content}
        </p>

      </div>
    </section>
  );
};

export default BlogDetails;