import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Banner } from '../../pages'

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Banner />} />
    </Routes>
  )
}

export default CommonRoutes
