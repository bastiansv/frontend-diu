import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'

import NavBar from '../components/nav_bar'
import { RecyclingMap } from '../pages/recycling_map'
import { BinDetails } from '../pages/bin_details'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/recycling-points' element={<RecyclingMap/>}/>
            <Route path='/recycling-points/details/:id' element={<BinDetails/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
