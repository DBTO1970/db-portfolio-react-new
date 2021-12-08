import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About";
import App from './App';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
    
    );