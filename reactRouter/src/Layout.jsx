import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Hearder/Header'
import Footer from './components/Footer/Footer'


function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
