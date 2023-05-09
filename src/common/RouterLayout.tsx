import React from 'react'
import Nav from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export const RouterLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}
