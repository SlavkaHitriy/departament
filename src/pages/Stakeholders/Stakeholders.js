import React from 'react'

// Styles
import styles from './index.module.scss'
import Title from '../../modules/Title/Title'

import fileIcon from '../../assets/images/stakeholdersIcon.svg'




const Stakeholders = () => {
   return (
      <div className={styles.stakeholders}>
         <div className={styles.container}>
            <div className={styles.stakeholdersTitleWrapper}>
               <Title className={styles.stakeholdersTitle} contents="Стейкхолдери" />
            </div>
            <div className={styles.stakeholdersContent}>
               <p className={styles.stakeholdersText}>
                  Кафедра обчислювальної техніки має потужні зв’язки з ІТ-компаніями. На сьогоднішній день Факультет інформаційних технологій і комп’ютерної інженерії, до якого належить кафедра обчислювальної техніки, має офіційні договори про співпрацю з такими компаніями як ЕПАМ СИСТЕМЗ, 4ХайТек, Infopuls, Делфі Софтвер, ВІН ІНТЕРАКТІВ та інші. Крім того при факультеті з 2005-го року працює Мережева академія Cisco Systems. На кафедрі працює спільна лабораторія з Інститутом кібернетики ім. В.М. Глушкова НАН України
               </p>
               <div className= {styles.stakeholdersLinks}>
                  <a className={styles.stakeholdersLink} href='#'>Договір ТОВ "4ХайТек"</a>
                  <a className={styles.stakeholdersLink} href='#'>Договір ТОВ "Делфи Софтвер"</a>
                  <a className={styles.stakeholdersLink} href='#'>Договір ТОВ "ЕРАМ СИСТЕМЗ"</a>
                  <a className={styles.stakeholdersLink} href='#'>Договір ТОВ "Торгові системи"<img src={fileIcon} alt="file pdf"/></a>
                  <a className={styles.stakeholdersLink} href='#'>Договір "Інститут Кібернетики НАН України ім. В.М.Глушкова" <img src={fileIcon} alt="file pdf"/></a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Stakeholders