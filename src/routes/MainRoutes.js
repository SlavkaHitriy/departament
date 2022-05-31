import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from '../pages/Home/Home'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
    )
}

export default MainRoutes
