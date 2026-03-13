import React from 'react'
import './App.css'
import Header from './global-components/Header'
import Footer from './global-components/Footer'
import AppRoutes from './routes/AppRoutes'
import TopBar from './global-components/TopBar'

function App() {
  return (
    <>
      <TopBar />
      <Header />  
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
