import React from 'react'

// Styles
import styles from './index.module.scss'

// Images
import HomeOpportunitiesPicture from '../../assets/images/HomeOpportunitiesPicture.png'

// Components
import Title from '../../modules/Title/Title'


const HomeOpportunities = () => {
   return (
      <section className={styles.homeOpportunities}>
         <div className={styles.container}>
            <div className={styles.opportunities}>
               <div className={styles.homeOpportunitiesImg}>
                  <img src={HomeOpportunitiesPicture} alt="HomeOpportunitiesPicture"/>
               </div>
               <div className={styles.homeOpportunitiesContent}>
                  <Title className={styles.homeOpportunitiesTitle} contents="Кар'єрні можливості"/>
                  <ul className={styles.homeOpportunitiesList}>
                     <li className={styles.homeOpportunitiesListItem}>Network engineer, NOC engineer</li>
                     <li className={styles.homeOpportunitiesListItem}>Harware Engineer</li>
                     <li className={styles.homeOpportunitiesListItem}>DevOPS Engineer</li>
                     <li className={styles.homeOpportunitiesListItem}>Data Scientist, Data Analyst</li>
                     <li className={styles.homeOpportunitiesListItem}>Системний адміністратор</li>
                     <li className={styles.homeOpportunitiesListItem}>Системний програміст</li>
                     <li className={styles.homeOpportunitiesListItem}>Адміністратор веб-серверів</li>
                     <li className={styles.homeOpportunitiesListItem}>Front-end/Back-end Developer</li>
                     <li className={styles.homeOpportunitiesListItem}>Full Stack Developer</li>
                     <li className={styles.homeOpportunitiesListItem}>QA Engineer</li>
                     <li className={styles.homeOpportunitiesListItem}>Архітектор та програміст баз даних</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeOpportunities