import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Fun from "./pages/Fun";
import Interior from "./pages/Interior";
import Biology from "./pages/Education/Biology";
import SuperHero from "./pages/Fun/SuperHero";
import Furniture from "./pages/Interior/Furniture";

function App() {
  return (
      <div className="App">
       <BrowserRouter>
       
        <Routes>
          {/* <Route path="/signup" element={<Signup showalert={showalert}/>}/> */}
          <Route path="/" element={<Home />} />
         
          <Route path="/education" element={<Education />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/biology" element={<Biology />} />
          <Route path="/superhero" element={<SuperHero />} />
          <Route path="/furniture" element={<Furniture />} />
         

         
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
