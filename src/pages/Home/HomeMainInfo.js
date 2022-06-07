import React from 'react'

// Styles
import styles from './index.module.scss'

// Images

import photoMainInfo from '../../assets/images/MainInfo.png'

// Components
import Title from '../../modules/Title/Title'



const HomeMainInfo = () => {
   return (
         <section className={styles.homeMainInfo}>
            <div className={styles.container}>
               <div className={styles.mainInfo}>
                  <img src={photoMainInfo} alt="PhotoHomeMainInfo" />
                  <div className={styles.mainInfoContent}>
                     <Title className={styles.mainInfoTitle} contents="Загальна інформація" />
                     <p className={styles.mainInfoText}>
                        <a href='#'>Кафедру обчислювальної техніки (ОТ)</a> було засновано у 1972 році. Вона здійснює підготовку фахівців у галузі інформатики та обчислювальної техніки зі спеціальності 123 — «Комп’ютерна інженерія» за освітніми програмами "Комп’ютерна інженерія" та "Системне програмування". Наша спеціальність спрямована на:
                     </p>
                     <ul className={styles.mainInfoList}>
                        <li className={styles.mainInfoListItem}>
                           дослідження, розробку. впровадження сучасних комп'ютерних апаратно-програмних методів та засобів
                        </li>
                        <li className={styles.mainInfoListItem}>
                           проектування й адміністрування комп’ютерних мереж та систем, систем керування базами даних, Web-систем
                        </li>
                        <li className={styles.mainInfoListItem}>
                           розробку системного і прикладного програмного забезпечення сучасними мовами і технологіями проектування
                        </li>
                     </ul>
                     <p className={styles.mainInfoText}>
                        Наші випускники працюють програмістами, веб-програмістами, аналітиками, інженерами ЕОМ, адміністраторами, системними програмістами та інтеграторами, а також мають власні компанії, що займаються розробкою комп'ютерних систем та мереж і відповідного програмного забезпечення.
                     </p>
                     <button className={styles.mainInfoButton}>Пошук спеціальностей</button>
                  </div>
               </div>
            </div>
         </section>
   )
}

export default HomeMainInfo