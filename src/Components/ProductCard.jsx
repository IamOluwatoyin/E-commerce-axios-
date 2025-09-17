import React from 'react'
import "./ProductCard.css"
import { Link, useNavigate } from 'react-router-dom'
const ProductCard = ({product}) => {
  console.log(product)
  const nav = useNavigate()

  return (
    
    <div className='cardstyle' onClick={()=>nav(`/productDetails/${product.id}`)}>
      <div className='image-container'>
      <img src={product.images} alt='productImg' className='imageHolder'/>
      
      </div>
      <div className='product-details'>
      <p>{product.title}</p>
      <p>${product.price}</p>
     
      </div>
    </div>

  )
  
}

export default ProductCard

