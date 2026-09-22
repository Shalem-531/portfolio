import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
