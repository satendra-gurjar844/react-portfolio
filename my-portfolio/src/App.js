import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Profile from "./Component/Profile";
import Resume from "./Component/Resume";
import Contact from "./Component/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
