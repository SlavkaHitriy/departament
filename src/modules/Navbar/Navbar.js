import React from 'react'


//Styles
import styles from './index.module.scss'

const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <div className={styles.container}>
            <nav className={styles.navbarContent}>
               <ul className={styles.navbarMenu}>
                  <li className={styles.navbarMenuItem}><a href='#'>Головна</a></li>
                  <li className={styles.navbarMenuItem}><a href='#'>Новини</a></li>
                  <li className={styles.navbarMenuItem}><a href='#'>Викладачі</a></li>
                  <li className={styles.navbarMenuItem}><a href='#'>Абітурієнту</a></li>
                  <li className={styles.navbarMenuItem}><a href='#'>Історія кафедри</a></li>
                  <li className={styles.navbarMenuItem + ' ' + styles.navbarMenuItemDropdown}>
                     <div className={styles.dropBtn}>Навчальна інформація</div>
                     <div className={styles.dropDown}>
                        <a href='#'>Ми в JetIQ</a>
                        <a href='#'>Матеріали дисциплін</a>
                        <a href='#'>ОПП</a>
                     </div>
                  </li>
                  <li className={styles.navbarMenuItem + ' ' + styles.navbarMenuItemDropdown1}>
                     <div className={styles.dropBtn1}>Наукова робота</div>
                     <div className={styles.dropDown1}>
                        <a href='#'>Аспірантура</a>
                        <a href='#'>Жернал ІТКІ</a>
                     </div>
                  </li>
                  <li className={styles.navbarMenuItem}><a href='#'>Методичні розробки</a></li>
                  <li className={styles.navbarMenuItem}><a href='#'>Лабораторія кафедри</a></li>
                  <li className={styles.navbarMenuItem}><a href='#'>Випускники</a></li>
                  <li className={styles.navbarMenuItem}><a href='#'>Стейкхолдери</a></li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Navbar