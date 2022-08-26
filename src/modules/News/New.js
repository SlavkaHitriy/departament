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
                     <img src={Azarov} alt='Azarov'/>
                     <div className={styles.homeNewsItemContent}>
                        <h4 className={styles.homeNewsItemTitle}>
                           УКАЗ ПРЕЗИДЕНТА УКРАЇНИ №658/2021
                        </h4>
                     </div>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     Відповідно до Указу Президента України від 10 вересня 2011 року № 906 "Про державні стипендії для видатних діячів науки, освіти, культури і мистецтва, охорони здоров'я, фізичної культури і спорту та інформаційної сфери" (зі змінами, внесеними Указами від 12 липня 2013 року № 377, від 30 грудня 2013 року № 717 та від 7 травня 2015 року № 256) <span>постановляю:</span>
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     1. Призначити строком на два роки державні стипендії видатним діячам науки:
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     АЗАРОВУ Олексію Дмитровичу - 1950 року народження, докторові технічних наук, професорові, заслуженому працівникові освіти України
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     НАРИТНИКУ Теодору Миколайовичу - 1946 року народження, кандидатові технічних наук, заслуженому працівникові промисловості України, лауреатові Державної премії України в галузі науки і техніки.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     2. Внести до Указу Президента України від 11 червня 2021 року № 235 "Про призначення довічних державних стипендій видатним діячам науки" зміну, виключивши абзац шостий статті 1.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     <span>Президент України В.ЗЕЛЕНСЬКИЙ</span>
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     16 грудня 2021 року
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     <span>Олексій Дмитрович Азаров викладає у Вінницькому національному технічному університеті з 1977 року. </span>
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     Пройшов шлях від аспіранта, асистента, старшого викладача, доцента кафедри обчислювальної техніки до завідувача кафедри (1988 – 1993 рр.), професора.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     З 1995 р. по теперішній час – завідувач кафедри.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     Кандидат технічних наук з 1980 р., доктор технічних наук з 1995 р. Отримав вчене звання доцента у 1983 р., професора – у 1998 р.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     З вересня 1995 року по 2002 рік, та з 2014 рік по 2020 рік – декан факультету інформаційних технологій та комп`ютерної інженерії ВНТУ.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     З лютого 2002 року – директор Інституту інформаційних технологій та комп`ютерної інженерії (ІнІТКІ). Відомий фахівець у галузі проектування високоточних швидкодіючих аналого-цифрових і цифро-аналогових перетворювачів з ваговою надлишковістю.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     Голова спеціалізованої вченої ради і член ради із захисту докторських і кандидатських дисертацій при Вінницькому національному технічному університеті. Головний редактор міжнародного науково-технічного журналу «Інформаційні технології та комп`ютерна інженерія», член редколегії наукового журналу «Вісник Вінницького політехнічного інституту».
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     Керує аспірантурою.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     В період з 1993 по теперішній час підготував 16 кандидатів наук.
                  </p>
               </div>
               <div className={styles.homeNewsItem}>
                  <p className={styles.homeNewsItemText}>
                     Наукові та науково-методичні результати роботи Азарова О. Д. опубліковано у понад 520 науково-методичних працях, серед яких 13 монографій, 250 патентів, 30 навчально-методичних праць, зокрема, 5 посібників із грифом МОНУ.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default New
