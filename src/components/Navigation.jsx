import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = ({ isMenuOpen, setModalOpen }) => {
  return (
    <nav
      className={`modal-container ${isMenuOpen ? 'full-modal-container' : ''}`}
    >
      <ul className={`modal-content ${isMenuOpen ? 'full-modal-content' : ''}`}>
        <li>
          <Link to='/' onClick={() => setModalOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/projects' onClick={() => setModalOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={() => setModalOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;