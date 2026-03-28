import { useEffect, useState } from "react";

const BlogsData = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(blogs)
  useEffect(() => {
    fetch("/blogsData.json")
    .then((res) => res.json())
      .then((data) => {
        setBlogs(data.Blogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading Blogs:", err);
        setLoading(false);
      });
  }, []);
  
  return { blogs, loading };
};

export default BlogsData