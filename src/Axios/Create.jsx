import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Create = () => {
  const [value, setValue]= useState({name: "", email:""});
  const navigate=useNavigate();

  function handleCreate() {

    axios.post("http://localhost:3000/data", value);
    navigate("/");
    
  }

  return (
    <div className='create'>
   <form onSubmit={handleCreate}>
    <h1>Create Data</h1>
    <label htmlFor="name"><b>Name: </b></label>
    <input type='text' id='name' name='name' onChange={(e)=>setValue({...value,[e.target.name]:[e.target.value]})}/>
    <br /><br />
    <label htmlFor="email"><b>Email: </b></label>
    <input type='email' id='email' name='email' onChange={(e)=>setValue({...value,[e.target.name]:[e.target.value]})}/>
    <br /> <br /> <br />
    <button type='submit'>Create</button>

   </form>
    </div>
  )
}

export default Create
