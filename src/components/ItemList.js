import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemList = () => {
const [show,setshow]=useState(true);
const handleclick=()=>{
    setshow(false);
}
  return (
    <div>
       {show && <div>
        <h1>Item List</h1>
       <ul>
        <li onClick={handleclick}><Link to='/items/1'>Item 1</Link></li>
        <li onClick={handleclick}><Link to='/items/2'>Item 2</Link></li>
        <li onClick={handleclick}><Link to='/items/3'>Item 3</Link></li>
       </ul>
        </div>}
        <Routes>
     <Route path='/items/:id' element={<ItemDetail />} />            
        </Routes>
    </div>
  )
}

export default ItemList