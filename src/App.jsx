import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Courses } from './pages/Courses'
import { NotFound } from './pages/NotFound'
import { LayOut } from './pages/component/LayOut'

const App = () => {
  return (
    <div>
       <Routes>   
          <Route path='/' element={<LayOut/>}>
            <Route index element={<Home/>}/> 
            <Route path='about' element={<About/>}/>
            <Route path='courses' element={<Courses/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App