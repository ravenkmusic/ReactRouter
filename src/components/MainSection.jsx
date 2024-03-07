import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Home from "./Home";
import Blue from "./Blue";

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