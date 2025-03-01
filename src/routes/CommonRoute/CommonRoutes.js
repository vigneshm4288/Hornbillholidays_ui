import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Banner,ContactUs,Destination,Packages} from '../../pages'

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Banner />} />
      <Route path="/packages" index element={<Packages />} />
      <Route path="/contact" index element={<ContactUs />} />
      <Route path="/destinations" index element={<Destination/>}/>
    </Routes>
  )
}

export default CommonRoutes
