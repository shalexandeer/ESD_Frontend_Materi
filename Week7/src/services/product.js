import axios from "axios";
import { BASE_URL } from "./url";


function getProducts(){
  const url = `${BASE_URL}/products`
  return axios.get(url);
}

function getProductById(id){
  const url = `${BASE_URL}/products/${id}`
  return axios.get(url);
}

export const productService = {
  getProducts,
  getProductById,
}