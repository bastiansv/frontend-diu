import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <nav className='nav-bar'>
      <h2 className='nav-bar__title'>
        Recicla Fácil
      </h2>
      {location.pathname !== '/' && (
        <button className='nav-bar__back-button' onClick={handleBackClick}>
          Volver
        </button>
      )}
    </nav>
  );
};

export default NavBar;