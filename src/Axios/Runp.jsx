import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home"
import Create from "./Create"
import Update from "./Update"

const Runp = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Runp
