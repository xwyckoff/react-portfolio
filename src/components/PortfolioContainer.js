import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page)

    const renderPage = () => {
    if(currentPage === 'Home') return <Home handlePageChange={handlePageChange}/>
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