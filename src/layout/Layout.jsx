import React from 'react'
import {Outlet} from 'react-router-dom'
import Home from '../components/Home'
import Header from '../components/Header'


function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Layout      