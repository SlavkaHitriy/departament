import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from '../pages/Home/Home'
import News from '../pages/News/News'
import New from '../modules/News/New'
import History from '../pages/History/History'
import Stakeholders from '../pages/Stakeholders/Stakeholders'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news/:page' element={<News />} />
            <Route path='/new/0' element={<New />} />
            <Route path='/history' element={<History />} />
            <Route path='/stakeholders' element={<Stakeholders />} />
            <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
    )
}

export default MainRoutes
