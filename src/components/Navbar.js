import React from 'react';

export default function Navbar({ currentPage, handlePageChange, username }) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home" onClick={() => handlePageChange('Home')}>{username}</a>
                <ul className="navbar-nav">
                    <li className={currentPage = 'About me' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="#aboutme">About Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}