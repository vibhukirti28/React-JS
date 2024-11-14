import React, { useEffect, useState } from 'react'

const datab = () => {

    const [data, setData]= useState([]);

    useEffect(()=>{

        fetch(`http://localhost:3000/data`)
        .then((res)=>res.json())
        .then((d)=>console.log(d));

    })


  return (
    <div>
      
    </div>
  )
}

export default datab
