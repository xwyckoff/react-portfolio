import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home')
  const handlePageChange = (page) => setCurrentPage(page)
  const renderPage = () => {
    if(currentPage === 'Home') return <Home />
    if(currentPage === 'About Me') return <AboutMe />
    if(currentPage === 'Contact') return <Contact />
    if(currentPage === 'Portfolio') return <Portfolio />
    return <Resume />
  }


  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} username={'xwyckoff'}/>
      {renderPage()}
    </div>
  )
}

export default App;
