import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Landing from "./views/Landing";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Header from "./views/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;