
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import ItemList from "./ItemList";

const App = () => {
  return (
    <div>
      {/* <ItemList/> */}
      <Routes>
        <Route path="/*" element={<ItemList/>} />
      </Routes>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
