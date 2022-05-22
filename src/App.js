import React from 'react'

// Components
import Home from './pages/Home/Home'
import Teachers from './pages/Teachers/Teachers'
import Header from './modules/Header/Header'
import Navbar from './modules/Navbar/Navbar'

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Navbar/>
        </div>
    )
}

export default App
