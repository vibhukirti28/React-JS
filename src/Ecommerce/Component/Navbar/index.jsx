import React from 'react'
import './index.scss'
import {Link} from "react-router-dom"

const index = ({setSearch, cart}) => {
  return (
    <div className='navbar'>
      <div className='inner-container'>
        <Link to={'/'}>
        <h1 className='title'>Sudesh Mart</h1>
        </Link>
        <input onChange={(e)=>setSearch(e.target.value)}/>
        <Link to="/cart">
        <p className='cart-icon'>🛒 {cart.length}</p>
        </Link>
      </div>
    </div>
  )
}

export default index
