import React from 'react'

// Styles
import styles from './index.module.scss'

// Images

// Components
import Header from '../../modules/Header/Header'
import Navbar from '../../modules/Navbar/Navbar'
import Footer from '../../modules/Footer/Footer'
import HomeDepartmentOt from './HomeDepartmentOt'
import HomeMainInfo from './HomeMainInfo'
import HomeNews from './HomeNews'
import HomeOpportunities from './HomeOpportunities'


const Home = () => {
    return (
        <div className={styles.home}>
            <HomeDepartmentOt />
            <HomeMainInfo />
            <HomeNews />
            <HomeOpportunities />
        </div>
    )
}

export default Home
