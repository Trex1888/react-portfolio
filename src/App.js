import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Mern from "./components/Mern";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Mern />
    </div>
  );
}

export default App;
