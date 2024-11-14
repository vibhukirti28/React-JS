import React, {useState} from 'react'
import { useEffect } from 'react'

const pix = () => {

const [search, setSearch]=useState("");
const [data, setData]=useState([]);

useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=46599438-9f84012e53417ee547b3289b8&q=${search}&image_type=photo`)
    .then((res)=>res.json())
    .then((d)=>
    {
    
        setData(d.hits);
        console.log(d.hits);
        
    
    });

 } ,[data]);
    

  return (
    <div>


        <input onChange={(e)=>setSearch(e.target.value)} />
      
      {
        data.map((item, index)=>{

            return(
                <div key={index}>
                <img
                 src={item.largeImageURL}/>
                 width={item.webformatWidth}
                 height=(item.webformatHeight)
                 </div>
            )
        })
      }
    </div>
  )
}

export default pix
