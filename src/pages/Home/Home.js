import React from 'react'

// Styles
import styles from './index.module.scss'

// Images
import photoMainInfo from '../../assets/images/PhotoHomeMainInfo.png'

// Components
import Header from '../../modules/Header/Header'
import Navbar from '../../modules/Navbar/Navbar'

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Navbar />
            <section className={styles.homeDepartmentOt}>
                <div className={styles.container}>
                    <div className={styles.departmentOt}>
                        <img src={photoMainInfo} alt="PhotoHomeMainInfo" />
                        <div className={styles.departmentOtInfo}>
                            <h2 className={styles.departmentOtTitle}>Кафедра обчислювальної техніки</h2>
                            <p className={styles.departmentOtText}>
                                На кафедрі ОТ в рамках спеціальності 123 "Комп'ютерна інженерія" впроваджено:
                            </p>
                            <ul className={styles.departmentOtList}>
                                <li className={styles.departmentOtListItem}>
                                    бакалаврську  освітню програму "СИСТЕМНЕ ПРОГРАМУВАННЯ"  — прийом 45 осіб
                                </li>
                                <li className={styles.departmentOtListItem}>
                                    бакалаврську освітню програму "КОМП'ЮТЕРНА ІНЖЕНЕРІЯ"  —  прийом 45 осіб випускників шкіл і 30 осіб - випускників коледжів
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.homeDepartmentOt}>
                <div className={styles.container}>
                    <div className={styles.departmentOt}>
                        <img src={photoMainInfo} alt="PhotoHomeMainInfo" />
                        <div className={styles.departmentOtInfo}>
                            <h2 className={styles.departmentOtTitle}>Кафедра обчислювальної техніки</h2>
                            <p className={styles.departmentOtText}>
                                На кафедрі ОТ в рамках спеціальності 123 "Комп'ютерна інженерія" впроваджено:
                            </p>
                            <ul className={styles.departmentOtList}>
                                <li className={styles.departmentOtListItem}>
                                    бакалаврську  освітню програму "СИСТЕМНЕ ПРОГРАМУВАННЯ"  — прийом 45 осіб
                                </li>
                                <li className={styles.departmentOtListItem}>
                                    бакалаврську освітню програму "КОМП'ЮТЕРНА ІНЖЕНЕРІЯ"  —  прийом 45 осіб випускників шкіл і 30 осіб - випускників коледжів
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.homeMainInfo}>
                <div className={styles.container}>

                </div>
            </section>
        </div>
    )
}

export default Home
