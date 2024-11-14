import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const Update = () => {
  const [value, setValue]= useState({name: "", email:""});
  const navigate=useNavigate();
  const {id}=useParams();

  console.log(id);

  useEffect(()=>{
    axios.get("http://localhost:3000/data/" + id)
    .then((res)=> setValue(res.data))
  }, [])

  function handleUpdate() {

    axios.put("http://localhost:3000/data/"+id, value);
    navigate("/");
    
  }

  return (
    <div className='Update'>
   <form onSubmit={handleUpdate}>
    <h1>Update Data</h1>
    <input type='text' name='name' onChange={(e)=>setValue({...value,[e.target.name]:[e.target.value]})}
    placeholder="Enter your Name"
    value={value.name}
    />

    

    <input type='email' name='email' onChange={(e)=>setValue({...value,[e.target.name]:[e.target.value]})}
    placeholder="Enter your Email"
    value={value.email}
    />

    

    <button type='submit'>Update</button>

   </form>
    </div>
  )
}

export default Update
