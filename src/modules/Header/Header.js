import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Images
import logoVntu from '../../assets/images/logoVntu.png'
import logoOt from '../../assets/images/logoOt.png'

// Styles
import styles from './index.module.scss'

// Components
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import HeaderLangs from './HeaderLangs'
import SvgSprite from '../SvgSprite/SvgSprite'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.headerFirst}>
                    <div className={styles.headerLogo}>
                        <a className={styles.headerLogoItem} href='#'>
                            <img src={logoVntu} alt='logo'/>
                        </a>
                        <Link className={styles.headerLogoItem} to={'/'}>
                            <img src={logoOt} alt='logo'/>
                        </Link>
                    </div>
                    <div className={styles.headerSearch}>
                        <form>
                            <input className={styles.headerSearchInp} type='search' name='name' placeholder='Пошук...'/>
                            <button className={styles.headerSearchBtn} type='submit'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.6334 27.8662L21.1022 19.335C22.7547 17.2938 23.7497 14.7 23.7497 11.875C23.7497 5.32752 18.4223 0 11.8748 0C5.3274 0 0 5.32746 0 11.875C0 18.4225 5.32746 23.75 11.8749 23.75C14.6998 23.75 17.2936 22.755 19.3348 21.1025L27.8659 29.6337C28.1097 29.8775 28.4297 30 28.7497 30C29.0697 30 29.3897 29.8775 29.6335 29.6337C30.1222 29.145 30.1222 28.355 29.6334 27.8662ZM11.8749 21.25C6.70493 21.25 2.49999 17.045 2.49999 11.875C2.49999 6.70494 6.70493 2.49996 11.8749 2.49996C17.0449 2.49996 21.2498 6.70494 21.2498 11.875C21.2498 17.045 17.0448 21.25 11.8749 21.25Z" fill="#54A8DD"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <HeaderLangs />
                    <a href='mailto:ot.vntu@gmail.com' className={styles.headerEmail}>
                        <SvgSprite className={styles.headerEmailIcon} id={'email'}/>
                        <span>ot.vntu@gmail.com</span>
                    </a>
                    <div className={styles.headerMenu} onClick={() => setMenuActive(!menuActive)}>
                        <div className={styles.textMenu}>Mеню</div>
                        <div className={styles.menuBtn}>
                            <div className={styles.burgerBtn}>
                                <span/>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    menuActive && <BurgerMenu setActive={setMenuActive}/>
                }
            </div>
        </header>
    )
}

export default Header
