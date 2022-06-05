import React from 'react'

// Styles
import styles from './index.module.scss'

// Images
import HomeNewsFirstPicture from '../../assets/images/HomeNewsFirstPicture.png'
// Components
import Header from '../../modules/Header/Header'
import Navbar from '../../modules/Navbar/Navbar'
import Footer from '../../modules/Footer/Footer'
import Title from '../../modules/Title/Title'



const News = () => {
   return (
      <div className={styles.news}>
         <div className={styles.newsContent}>
            <div className={styles.container}>
               <div className={styles.newsTitleWrapper}>
                  <Title className = {styles.newsTitle} contents = "Новини"></Title>
               </div>
               <div className={styles.homeNewsItems}>
                  <div className={styles.homeNewsItem}>
                     <img src={HomeNewsFirstPicture} alt="HomeNewsFirstPicture" />
                     <div className={styles.homeNewsItemContent}>
                        <h4 className={styles.homeNewsItemTitle}>Чотири десятиліття розробок</h4>
                        <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу. В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                     </div>
                  </div>
                  <div className={styles.homeNewsItem}>
                     <img src={HomeNewsFirstPicture} alt="HomeNewsFirstPicture" />
                     <div className={styles.homeNewsItemContent}>
                        <h4 className={styles.homeNewsItemTitle}>Чотири десятиліття розробок</h4>
                        <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу. В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                     </div>
                  </div>
                  <div className={styles.homeNewsItem}>
                     <img src={HomeNewsFirstPicture} alt="HomeNewsFirstPicture" />
                     <div className={styles.homeNewsItemContent}>
                        <h4 className={styles.homeNewsItemTitle}>Чотири десятиліття розробок</h4>
                        <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу. В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                     </div>
                  </div>
                  <div className={styles.homeNewsItem}>
                     <img src={HomeNewsFirstPicture} alt="HomeNewsFirstPicture" />
                     <div className={styles.homeNewsItemContent}>
                        <h4 className={styles.homeNewsItemTitle}>Чотири десятиліття розробок</h4>
                        <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу. В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                     </div>
                  </div>
                  <div className={styles.homeNewsItem}>
                     <img src={HomeNewsFirstPicture} alt="HomeNewsFirstPicture" />
                     <div className={styles.homeNewsItemContent}>
                        <h4 className={styles.homeNewsItemTitle}>Чотири десятиліття розробок</h4>
                        <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу. В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                     </div>
                  </div>
                  <div className={styles.homeNewsItem}>
                     <img src={HomeNewsFirstPicture} alt="HomeNewsFirstPicture" />
                     <div className={styles.homeNewsItemContent}>
                        <h4 className={styles.homeNewsItemTitle}>Чотири десятиліття розробок</h4>
                        <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу. В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default News