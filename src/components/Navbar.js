import React from 'react';

export default function Navbar({ currentPage, handlePageChange, username }) {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark py-3 shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home" onClick={() => handlePageChange('Home')}>{username}</a>
                <ul className="navbar-nav">
                    <li className={currentPage === 'About Me' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="#aboutme" onClick={() => handlePageChange('About Me')}>About Me</a>
                    </li>
                    <li className={currentPage === 'Portfolio' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                    </li>
                    <li className={currentPage === 'Contact' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
                    </li>
                    <li className={currentPage === 'Resume' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}