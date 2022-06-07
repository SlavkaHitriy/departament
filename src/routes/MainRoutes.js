import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from '../pages/Home/Home'
import News from '../pages/News/News'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<News />} />
            <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
    )
}

export default MainRoutes
