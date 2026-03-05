import React from 'react'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Report from './pages/Report'
import Category from './pages/Category'
import Product from './pages/Product'
import Sale from './pages/Sale'
import RoutTemplate from './templates/RoutTemplate'

function App() {
  return (
    <div className='bg-gray-800 text-white p-4 rounded-lg'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RoutTemplate />} >
               <Route path='/home' element={<Home />} />
               <Route path='/report' element={<Report />} />
               <Route path='/category' element={<Category />} />
               <Route path='/product' element={<Product />} />
               <Route path='/sale' element={<Sale />} />
          </Route>
          
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App