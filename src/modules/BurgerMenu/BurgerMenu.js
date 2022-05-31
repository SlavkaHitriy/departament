import React from 'react'

// Styles
import styles from './index.module.scss'
import SvgSprite from '../SvgSprite/SvgSprite'

const BurgerMenu = ({setActive}) => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuContent}>
                <ul className={styles.menuList}>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon1'}/>
                            Головна
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon2'}/>
                            Новини
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon3'}/>
                            Викладачі
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon4'}/>
                            Абітурієнту
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon5'}/>
                            Історія кафедри
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <div className={styles.menuListItemNested}>
                            <SvgSprite id={'menuIcon6'}/>
                            <div className={styles.menuListNested}>
                                <div className={styles.menuListNestedTitle}>Навчальна інформація</div>
                                <div className={styles.menuListNestedItems}>
                                    <a className={styles.menuListNestedItem} href='#'>Ми в JetIQ</a>
                                    <a className={styles.menuListNestedItem} href='#'>Матеріали дисциплін</a>
                                    <a className={styles.menuListNestedItem} href='#'>ОПП</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.menuListItems}>
                        <div className={styles.menuListItemNested}>
                            <SvgSprite id={'menuIcon7'}/>
                            <div className={styles.menuListNested}>
                                <div className={styles.menuListNestedTitle}>Наукова робота</div>
                                <div className={styles.menuListNestedItems}>
                                    <a className={styles.menuListNestedItem} href='#'>Аспірантура</a>
                                    <a className={styles.menuListNestedItem} href='#'>Журнал ІТКІ</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon8'}/>
                            Методичні розробки
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon9'}/>
                            Лабораторія кафедри
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon10'}/>
                            Випускники
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite id={'menuIcon11'}/>
                            Стейкхолдери
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.menuClose} onClick={() => setActive(false)}>
                <span/>
                <span/>
            </div>
        </div>
    )
}

export default BurgerMenu
