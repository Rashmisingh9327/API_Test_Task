import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider_Show from "./Components/Slider-Show";
import Slider_Data from "./Components/Slider-Data";

import "./App.css";


function App() {
 

  return (
  
    <div className="app">
      {/* <Slider_Show /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slider_Show/>}></Route>
          <Route path='/userdata/:id' element={<Slider_Data/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
