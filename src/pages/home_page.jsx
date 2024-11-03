import React from 'react'
import { useNavigate } from 'react-router-dom'
import cardboardRecyclingImage from '../assets/cardboard_recycling.png'
import clothesRecyclingImage from '../assets/clothes_recycling.png'
import glassRecyclingImage from '../assets/glass_recycling.png'
import plasticRecyclingImage from '../assets/plastic_recycling.png'

export const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/recycling-points');
  }

  const cardInfoList = [
    {
      src: clothesRecyclingImage,
      alt: 'Ropa',
      text: '¿Cómo se recicla la ropa?'
    },
    {
      src: glassRecyclingImage,
      alt: 'Vidrio',
      text: '¿Cómo se recicla el vidrio?'
    },
    {
      src: plasticRecyclingImage,
      alt: 'Plástico',
      text: '¿Cómo se recicla el plástico?'
    },
    {
      src: cardboardRecyclingImage,
      alt: 'Cartón',
      text: '¿Cómo se recicla el cartón?'
    }
  ]

  return (
    <>
      <div className='card__container'>
        {cardInfoList.map((card, index) => (
          <a href={`/article/${index}`} key={index} className='card'>
            <div className='card'>
              <img src={card.src} alt={card.alt} />
              <p>{card.text}</p>
            </div>
          </a>
        ))}
      </div>
      <footer className='footer'>
        <button onClick={handleButtonClick}>Buscar puntos de reciclaje cercanos</button>
      </footer>
    </>
  )
}

export default HomePage
