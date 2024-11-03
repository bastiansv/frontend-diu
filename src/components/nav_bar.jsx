import React from 'react'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <h2 className='nav-bar__title'>
        Recicla Fácil
      </h2>
    </nav>
  )
}
 
export default NavBar
