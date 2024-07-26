import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import './styles/App.scss';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
