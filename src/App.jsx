import React, { useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/navigations/Navbar";
import FullScreenNav from "./components/navigations/FullScreenNav";


const App = () => {

  


  

  return (
    <div className="text-white">
     
     <Navbar />
     <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agence" element={<Agence />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
     
    </div>
  );
};

export default App;
