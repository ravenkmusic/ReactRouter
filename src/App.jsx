import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import './App.css'

function App() {

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element ={<Blue />} />
          <Route path="/red" element={<Red />} />          
        </Routes>
        </div>
    </div>
  )
}

export default App