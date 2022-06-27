import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';

function App() {
  const [pageSelected, setPageSelected] = useState(false)
  return (
    <Router>
      {!pageSelected ?
      (<>
      <Welcome pageSelected={pageSelected} setPageSelected={setPageSelected}/>
      </>
      ):(
        <Nav />
      )}
      <div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      </Router>
    )
  }


export default App;
