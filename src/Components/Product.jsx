import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import "./Product.css"

const Product = () => {
  const [products, setProducts] = useState([])
  const getAllProduct = async () =>{
    try{
      const res = await axios.get("https://api.escuelajs.co/api/v1/products", products)
      setProducts(res.data)
      console.log(res.data)
    }catch(err){
       console.log('All Products', err )
    }
  }

  useEffect(()=>{
    getAllProduct()
  },[])
  return (
    <div className='product-wrapper'>
      <h1>SHOP ALL PRODUCTS</h1>
      <div  className='card-wrapper'>
        {products.map((item)=>(
          <div key={item.id}>
            <ProductCard product={item}/>
            </div>
        )
        )}
      </div>

    </div>
  )
}

export default Product
