import './navbar.css';
import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="nav">
        <div className="nav-left">
        </div>
        <div className="nav-right">
            <span className='navItems'>
                <span>
                    <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active currentLink' : 'nav-link'}
                    >
                    About Me
                    </a>
                </span>
                <span>
                    <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active currentLink' : 'nav-link'}
                    >
                    Portfolio
                    </a>
                </span>
                <span>
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active currentLink' : 'nav-link'}
                    >
                    Contact
                    </a>
                </span>
                <span>
                    <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active currentLink' : 'nav-link'}
                    >
                    Resume
                    </a>
                </span>
            </span>
        </div>
    </nav>
  );
}

export default Navbar;