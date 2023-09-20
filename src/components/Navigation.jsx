import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = ({ isMenuOpen, setModalOpen }) => {
  return (
    <nav
      className={`modal-container ${isMenuOpen ? 'full-modal-container' : ''}`}
      style={{backgroundColor: '#ffedd5'}}
    >
      <ul className={`modal-content ${isMenuOpen ? 'full-modal-content' : ''}`}>
        <li>
          <Link to='/' className='link' onClick={() => setModalOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/projects' className='link' onClick={() => setModalOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='/contact' className='link' onClick={() => setModalOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;