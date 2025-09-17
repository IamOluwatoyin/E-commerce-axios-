import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useAppContext } from "../../CartContext";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { addToCart } = useAppContext();

  const BASE_URL = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    const getProductId = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/${productId}`);
        setProduct(res.data);
        console.log("ProductId:", res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    getProductId();
  }, [productId]);

  return (
    <div className="product-wrapper">
      <div className="product-image-section">
        <div className="product-image-wrapper">
          <div className="product-image">
            <img
              src={product.images && product.images[0]}
              alt={product.title}
              className="image"
            />
          </div>
        </div>
        <div className="product-details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
