import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Banner,Packages} from '../../pages'

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Banner />} />
      <Route path="/Packages" index element={<Packages />} />
    </Routes>
  )
}

export default CommonRoutes
