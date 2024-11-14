import React, { useEffect, useState } from 'react'
import {useNavigate,Link} from "react-router-dom"
import axios from 'axios'

const Home = () => {

    const [data, setData]=useState([])
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3000/data")
        .then((res)=>setData(res.data));
    });

    function handleDelete(id){
        axios.delete('http://localhost:3000/data/'+id)
        .then(res=>console.log(res))
        navigate('/')
    }
  return (
    <div className='Home'>
      
      <header>
    <h1>CRUD</h1>

    <button onClick={()=>navigate("/create")}>Add+</button>
      </header>

      <table>

        <thead>
            <tr>
                <td>
                    <b>Name</b>
                </td>
                <td>
                    <b>Actions</b>
                </td>
            </tr>
        </thead>

        <tbody>
        {
            data.map((item, index) =>{

                return (

                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={()=> navigate("/read")}>Read</button>
                            <button onClick={()=>handleDelete(item.id)}>Delete</button>
                            <Link to={`/update/${item.id}`}><button>Update</button></Link>
                        </td>
                    </tr>
                )
            })
        }

        </tbody>
      </table>



    </div>
  )
}

export default Home
