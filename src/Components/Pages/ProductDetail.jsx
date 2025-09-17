import React, { useEffect, useState } from 'react'
// import "./ProductDetail.css"
import axios from 'axios'
import { useParams } from 'react-router'

const ProductDetail = () => {
  const [products, setProducts] = useState({})

   const {productId} = useParams()

   console.log(params)
console.log(products)
const BASE_URL = "https://api.escuelajs.co/api/v1/products";
  

  useEffect(() => {
    const getProductId = async () => {
      try {
    const res = await axios.get(`${BASE_URL}/${productId}`,products);

        setProducts(res.data);
        console.log("ProductId:", res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    getProductId();
  }, [products]);


  return (
    <div className='"product-wrapper"'>
       <div className="product-wrapper">
        <div className="product-image-section">
          <div className="product-image-wrapper">
            <div className="product-image">
              <img
                src={product?.category?.image}
                alt="Main product"
                className="image"
              />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetail
