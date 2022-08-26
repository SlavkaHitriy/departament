import React from 'react'



// styles
import './assets/styles/app.scss'

// Components
import MainRoutes from './routes/MainRoutes'
import Footer from './modules/Footer/Footer'
import Header from './modules/Header/Header'
import Navbar from './modules/Navbar/Navbar'



const App = () => {
    return (
        <div className='app'>
            <Header />
            <Navbar />
            <main className='appMain'>
                <MainRoutes />
            </main>
            <Footer />
        </div>
    )
}

export default App
