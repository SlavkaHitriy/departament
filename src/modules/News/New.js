import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Styles
import styles from './index.module.scss'

// Images

import Azarov from '../../assets/images/Azarov.jpg'

// Components
import Title from '../../modules/Title/Title'


const New = () => {
   return (
      <div className={styles.news}>
         <div className={styles.newsContent}>
            <div className={styles.container}>
               <div className={styles.newsTitleWrapper}>
                  <Title className={styles.newsTitle} contents='Новини' />
               </div>
               <div className={styles.homeNewsItems}>
                  <Link className={styles.homeNewsItem} to="/new/0">
                     <img
                        src={Azarov}
                        alt='Azarov'
                     />
                     <div className={styles.homeNewsItemContent}>
                        <h4 className={styles.homeNewsItemTitle}>
                           УКАЗ ПРЕЗИДЕНТА УКРАЇНИ №658/2021
                        </h4>
                        <p className={styles.homeNewsItemText}>
                           Відповідно до Указу Президента України від 10 вересня 2011 року № 906 "Про державні стипендії для видатних діячів науки, освіти, культури і мистецтва, охорони здоров'я, фізичної культури і спорту та інформаційної сфери"...
                        </p>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default New
