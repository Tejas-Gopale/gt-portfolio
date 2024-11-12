import React from "react";
import "./index.css"
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default App;
