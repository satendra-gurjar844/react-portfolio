import React from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Portfolio from "./Component/Portfolio";
import Profile from "./Component/Profile";
import Resume from "./Component/Resume";


function App() {
  return (
  <>
    <Header/>

    <Profile/>
    <Portfolio/>
    <Resume/>
    <About/>
    <Contact/>
    
    <Footer/>
  </>
  );
}

export default App;
