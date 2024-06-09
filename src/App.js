import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import './styles/app.css';

function App() {
  return (
    <Router basename="/Mon-Portfolio">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
