import { useEffect, useState } from "react";
import { productService } from "../../services/product";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  useEffect(() => {
    const response = productService.getProducts();
    response.then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div>
      <Link to={"/profile"}>
        <p>go to profile</p>
      </Link>
      <h1>Product</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {product.length > 0 &&
          product.map((product) => (
            <div
              key={product.id}
              style={{ border: "black 1px solid" }}>
              <img
                src={product.image}
                alt=''
                style={{
                  maxWidth: "200px",
                  width: "100%",
                  height: "auto",
                  display: "grid",
                  placeItems: "center",
                }}
              />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
