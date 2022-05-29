import React from 'react'

// Styles
import styles from './index.module.scss'

// Images

// Components
import Header from '../../modules/Header/Header'
import Navbar from '../../modules/Navbar/Navbar'
import BurgerMenu from '../../modules/BurgerMenu/BurgerMenu'


const Home = () => {
    return (
        <div className={styles.home}>
            {/* <Header />
            <Navbar /> */}
            <BurgerMenu />
        </div>
    )
}

export default Home
