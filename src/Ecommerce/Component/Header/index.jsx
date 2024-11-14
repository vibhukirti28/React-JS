import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const index = ({data, search}) => {
  return (
    <div>
      <Carousel autoPlay style={{display:"flex", justifyContent:"center"}}>
    {data.filter((item, index)=> item.category.toLowerCase().includes(search))
    .map((item, index)=>{
      return(

        <header key={index} 
        style={{height:"700px", width:"50%"}}>
          <center>
            <img src={item.image} height={"800px"}/>
            <p className='legend'>
              <h1>{item.title}</h1>
              <p>$ {item.price}</p>
              <p>{item.rating.rate} ⭐</p>
            </p>
          </center>
        </header>

      )
    })}

      </Carousel>
    </div>
  )
}

export default index
