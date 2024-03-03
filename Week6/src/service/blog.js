import axios from "axios";
import { BASE_URL } from "./url";

function getAllBlogs() {
  const url = `${BASE_URL}/blog-posts`;
  return axios.get(url);
}

function getBlogById(id) {
  const url = `${BASE_URL}/blog-posts/${id}`;
  return axios.get(url);
}


const blogService = {
  getAllBlogs,
  getBlogById,
}

export default blogService;