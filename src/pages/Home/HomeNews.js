import React from 'react'

// Styles
import styles from './index.module.scss'

// Images
import HomeNewsFirstPicture from '../../assets/images/HomeNewsFirstPicture.png'
import HomeNewsSecondPicture from '../../assets/images/HomeNewsSecondPicture.png'

// Components
import Title from '../../modules/Title/Title'



const HomeNews = () => {
   return (
      <section className={styles.homeNews}>
         <div className={styles.container}>
            <div className={styles.hoveNewsTitleWrapper}><Title className={styles.homeNewsTitle} contents = "Новини"/></div>
            <div className={styles.homeNewsItems}>
               <div className={styles.homeNewsItem}>
                  <img src={HomeNewsFirstPicture} alt="HomeNewsFirstPicture"/>
                  <div className={styles.homeNewsItemContent}>
                     <h4 className={styles.homeNewsItemTitle}>Чотири десятиліття розробок</h4>
                     <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                  </div>
               </div>
               <div className={styles.homeNewsItem}>
                  <img src={HomeNewsSecondPicture} alt="HomeNewsSecondPicture" />
                  <div className={styles.homeNewsItemContent}>
                     <h4 className={styles.homeNewsItemTitle}>УКАЗ ПРЕЗИДЕНТА УКРАЇНИ №6...</h4>
                     <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                  </div>
               </div>
               <div className={styles.homeNewsItem}>
                  <img src={HomeNewsFirstPicture} alt="HomeNewsFirstPicture" />
                  <div className={styles.homeNewsItemContent}>
                     <h4 className={styles.homeNewsItemTitle}>Чотири десятиліття розробок</h4>
                     <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                  </div>
               </div>
               <div className={styles.homeNewsItem}>
                  <img src={HomeNewsSecondPicture} alt="HomeNewsSecondPicture" />
                  <div className={styles.homeNewsItemContent}>
                     <h4 className={styles.homeNewsItemTitle}>УКАЗ ПРЕЗИДЕНТА УКРАЇНИ №6...</h4>
                     <p className={styles.homeNewsItemText}>В лютому 2022 року знаменна для багатьох науковців університету дата – 40-річчя заснування відділу...</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeNews