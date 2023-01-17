import { useState } from 'react';
import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Tecno from './components/Tecno';
import Projects from './components/Projects';
import ProjectsSons from './components/ProjectsSons';


function App() {
  

  return (
    <HashRouter>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/technologies'> Tecnologias </Link>
        <Link to='/projects'> Proyectos </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />  
        <Route path='/technologies' element={<Tecno />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectsSons />} />
      </Routes>
      <footer> Esto es un footer </footer>
    </HashRouter>
  )
}

export default App
