import React from 'react'
import './ProductCard.css'

const ProductCard = ({children}) => {
  return (
    <div className='product-card'>{children}
      
    </div>
  )
}

const ProductImage=({src, alt})=>{
    return (
       <img className='product-image' src={src} alt={alt} />
      )

}

const ProductTitle=({title})=>{
    return (
       <h2 className='product-title'>{title}</h2>
      )

}


const ProductDescription=({children})=>{
    return (
        <p className='product-description'>{children}
          
        </p>
      )

}

const ProductPrice=({children})=>{
    return (
        <span className='product-price'>{children}
          
        </span>
      )

}



export {

    ProductCard,
    ProductImage,
    ProductTitle,
    ProductDescription,
    ProductPrice,
}
