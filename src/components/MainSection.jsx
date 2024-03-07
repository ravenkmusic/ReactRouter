import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

export default function MainSection(){
    return (
    <div id="main-section">
        <Routes>
        <Route path="/blue" element ={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />          
    </Routes>
    </div>
    )
}