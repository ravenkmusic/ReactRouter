import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import './App.css'

function App() {

  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/blue" element ={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />          
        </Routes>
        </div>
    </div>
  )
}

export default App