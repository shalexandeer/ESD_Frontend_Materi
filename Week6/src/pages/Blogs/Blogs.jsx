import React, { useEffect, useState } from "react";
import blogService from "../../service/blog";
import { Link, useNavigate } from "react-router-dom";

const Blogs = ({ props }) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/blogs/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    const response = blogService.getAllBlogs();
    response.then((res) => {
      setBlogData(res.data.blogs);
      setLoading(false);
    });
  }, []);

  if (blogData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>List Blogs</h1>
      <div className='grid grid-cols-3 gap-3'>
        {blogData.map((blog) => {
          return (
            <div
              key={blog.id}
              className='border border-black p-3'
              onClick={() => handleNavigate(blog.id)}>
              <img
                src={blog.photo_url}
                alt={blog.title}
                loading='lazy'
              />
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
