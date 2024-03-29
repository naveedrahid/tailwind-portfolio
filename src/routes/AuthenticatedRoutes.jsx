import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../components/Layouts/Layouts'
import { NavigationConstant } from '../lib/MenuConstant'
import About from '../components/Pages/About'
import Home from '../components/Pages/Home'

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route path={NavigationConstant.HOME} element={<Home />} />
        {/* <Route path='abtMove' element={<About />} /> */}
      </Route>
    </Routes>
  )
}

export default AuthenticatedRoutes