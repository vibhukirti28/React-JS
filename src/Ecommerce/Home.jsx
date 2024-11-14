import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Card from './Component/Card'
import {Data} from './Data/Data'
import Cart from './Component/Cart'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Home = () => {

    const [data, setdata ]=useState(Data);
    const [search, setSearch]=useState("");
    const [cart, setCart]=useState([]);

    function addCart(item) {
      
      setCart([...cart, item])
    }

    function removeCart(removeItem) {
      setCart(prevItems => prevItems.filter((item, index) => index!== removeItem));

    }
    

  return (
    <div className='Home'>
      <BrowserRouter>
      <Navbar cart={cart} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={
          <>
          <Header search={search} data={data}/>
          <Card addCart={addCart} search={search} data={data}/>
          </>
        } />
        <Route path="/cart" element={<Cart cart={cart} removeCart={removeCart}/>} />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default Home
