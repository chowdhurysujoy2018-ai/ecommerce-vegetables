import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
  )
}

export default AppRoutes