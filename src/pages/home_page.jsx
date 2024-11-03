import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/recycling-points');
  }

  return (
    <>
      <div className='card__container'>
        <div className='card'>
          <img src="https://placehold.in/600x200.png/dark" alt="Placeholder" />
          <p>¿Cómo se recicla el cartón?</p>
        </div>
        <div className='card'>
          <img src="https://placehold.in/600x200.png/dark" alt="Placeholder" />
          <p>¿Cómo se recicla el cartón?</p>
        </div>
        <div className='card'>
          <img src="https://placehold.in/600x200.png/dark" alt="Placeholder" />
          <p>¿Cómo se recicla el cartón?</p>
        </div>
      </div>
      <footer className='footer'>
        <button onClick={handleButtonClick}>Buscar puntos de reciclaje cercanos</button>
      </footer>
    </>
  )
}

export default HomePage
