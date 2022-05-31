import React from 'react'

// Styles
import styles from './index.module.scss'

// Images

// Components
import Header from '../../modules/Header/Header'
import Navbar from '../../modules/Navbar/Navbar'
import HomeDepartmentOt from './HomeDepartmentOt'
import HomeMainInfo from './HomeMainInfo'
import HomeNews from './HomeNews'

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Navbar />
            <HomeDepartmentOt/>
            <HomeMainInfo/>
            <HomeNews/>
        </div>
    )
}

export default Home
