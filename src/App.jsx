
import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import "./App.css"
import { Routes, Route  } from 'react-router-dom'
import NotFound from './vendorDashboard/components/NotFound'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/*' element={<NotFound />} /> {/* is opened instead of above url then not found component will render */}
      </Routes>
      
    </div>
  )
}

export default App