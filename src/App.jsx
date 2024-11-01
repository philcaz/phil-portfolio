import { useState } from 'react'
import "./styles/App.css"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Skill from "./components/Skill"
import Layout from "./components/Layout"
function App() {
  return (
    <Router basename='/phil-portfolio/'>
      <Layout> {/* Layout wraps all routes so Header is consistent */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;