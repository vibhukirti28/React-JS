import React from 'react'
import './index.css'

import {
    
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductDescription,
    ProductPrice,

} from '../../CompoundPattern/ProductCard'

const index = ({data, search, addCart}) => {
  return (
    <div className='card'>

       {data.filter((item, index)=>item.category.toLowerCase().includes(search))
       .map((item, index)=>{
        return (
            <ProductCard key={index}>
                <ProductImage src={item.image} alt={item.name} />
                <ProductTitle title={item.title}></ProductTitle>
                <ProductPrice>${item.price}</ProductPrice>
                <button className='btn' onClick={()=> addCart(item)}>Add Cart</button>
                <br />
                
            </ProductCard>
        )
       })} 
      
    </div>
  )
}

export default index
