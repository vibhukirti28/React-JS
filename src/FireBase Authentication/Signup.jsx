import React, { useState } from 'react'
import {auth} from './Firebase'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail]=useState("");
    const navigate =useNavigate();

   async function handleSubmit(e) {

    e.preventDefault();

    try {
       
        const credential=await createUserWithEmailAndPassword(auth, email, password);
        const user= await credential.user;
        console.log(user);
        navigate("/login")
        
    } 
    
    catch (error) {
         console.log(error);
         
    }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Signup Here</h1>
            <input type="email" placeholder='Enter your email' 
            name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>

            <br />
            <br />

            <input type="password" placeholder='Enter your password'
             name='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>

    <br />
    <br />
    <button type='submit'>Signup</button>
        </form>
      
    </div>
  )
}

export default Signup
