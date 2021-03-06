import React from 'react'
import {Link} from 'react-router-dom'

// Styles
import styles from './index.module.scss'
import SvgSprite from '../SvgSprite/SvgSprite'

const BurgerMenu = ({setActive}) => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuContent}>
                <ul className={styles.menuList}>
                    <li className={styles.menuListItems}>
                        <Link className={styles.menuListItem} to='/'>
                            <SvgSprite spriteID={'menuIcon1'}/>
                            Головна
                        </Link>
                    </li>
                    <li className={styles.menuListItems}>
                        <Link className={styles.menuListItem} to='/news/1'>
                            <SvgSprite spriteID={'menuIcon2'}/>
                            Новини
                        </Link>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite spriteID={'menuIcon3'}/>
                            Викладачі
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite spriteID={'menuIcon4'}/>
                            Абітурієнту
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite spriteID={'menuIcon5'}/>
                            Історія кафедри
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <div className={styles.menuListItemNested}>
                            <SvgSprite spriteID={'menuIcon6'}/>
                            <div className={styles.menuListNested}>
                                <div className={styles.menuListNestedTitle}>Навчальна інформація</div>
                                <div className={styles.menuListNestedItems}>
                                    <a className={styles.menuListNestedItem} href='https://vntu.edu.ua/'>Ми в JetIQ</a>
                                    <a className={styles.menuListNestedItem} href='#'>Матеріали дисциплін</a>
                                    <a className={styles.menuListNestedItem} href='#'>ОПП</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.menuListItems}>
                        <div className={styles.menuListItemNested}>
                            <SvgSprite spriteID={'menuIcon7'}/>
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
                            <SvgSprite spriteID={'menuIcon8'}/>
                            Методичні розробки
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite spriteID={'menuIcon9'}/>
                            Лабораторія кафедри
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite spriteID={'menuIcon10'}/>
                            Випускники
                        </a>
                    </li>
                    <li className={styles.menuListItems}>
                        <a className={styles.menuListItem} href='#'>
                            <SvgSprite spriteID={'menuIcon11'}/>
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
