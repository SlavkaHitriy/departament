import React from 'react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

// Styles
import styles from './index.module.scss'

// Components
import SvgSprite from '../SvgSprite/SvgSprite'

const Navbar = () => {
    const menuItems = [
        {name: 'Головна', link: '/'},
        {name: 'Новини', link: '/news'},
        {name: 'Викладачі', link: '/teachers'},
        {name: 'Абітурієнту', link: '/entrant'},
        {name: 'Історія кафедри', link: '/history'},
        {
            name: 'Навчальна інформація',
            nestedMenu: [
                {name: 'Ми в JetIQ', link: 'https://vntu.edu.ua/', anotherSite: true},
                {name: 'Матеріали дисциплін', link: '/materials'},
                {name: 'ОПП', link: '/opp'},
            ],
        },
        {
            name: 'Наукова робота',
            nestedMenu: [
                {name: 'Аспірантура', link: '/postgraduate'},
                {name: 'Журнал ІТКІ', link: '/journal'},
            ],
        },
        {name: 'Методичні розробки', link: '/history'},
        {name: 'Лабораторія кафедри', link: '/developments'},
        {name: 'Випускники', link: '/graduates'},
        {name: 'Стейкхолдери', link: '/stakeholders'},
    ]

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <nav className={styles.navbarContent}>
                    <ul className={styles.navbarMenu}>
                        {
                            menuItems.map(menuItem =>
                                !menuItem.nestedMenu ? (
                                    <li className={styles.navbarMenuItem} key={menuItem.name}>
                                        <NavLink className={({isActive}) => isActive && styles.navbarMenuLinkActive} to={menuItem.link}>
                                            {menuItem.name}
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li className={cn({
                                        [styles.navbarMenuItem]: true,
                                        [styles.navbarMenuItemDropdown]: true,
                                    })} key={menuItem.name}>
                                        <div className={styles.dropBtn}>
                                            {menuItem.name}
                                            <SvgSprite id={'arrow'}/>
                                        </div>
                                        <div className={styles.dropDown}>
                                            {
                                                menuItem.nestedMenu.map(nestedItem =>
                                                    !nestedItem.anotherSite ? (
                                                        <NavLink to={nestedItem.link} key={nestedItem.name}>
                                                            {nestedItem.name}
                                                        </NavLink>
                                                    ) : (
                                                        <a href={nestedItem.link} target={'_blank'} key={nestedItem.name}>
                                                            {nestedItem.name}
                                                        </a>
                                                    )
                                                )
                                            }
                                        </div>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
