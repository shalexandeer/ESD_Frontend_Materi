import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogService from "../../../service/blog";

const DetailBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch data by id
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await blogService.getBlogById(id);
        switch (response.status) {
          case 200:
            setBlog(response.data.blog);
            break;
          case 404:
            setBlog(null);
            break;
          default:
            throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <h1>Detail Blog</h1>
      <h2>{blog.title}</h2>
      <img
        src={blog.photo_url}
        alt={blog.title}
      />
      <p>{blog.content}</p>
    </div>
  );
};

export default DetailBlog;
