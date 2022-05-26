import React from 'react'

// Images
import logoVntu from '../../assets/images/logoVntu.png'
import logoOt from '../../assets/images/logoOt.png'
import flag from '../../assets/images/flag.svg'

// Styles
import styles from './index.module.scss'

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.headerFirst}>
                    <div className={styles.headerLogo}>
                        <a className={styles.headerLogoItem} href='#'>
                            <img src={logoVntu} alt='logo'/>
                        </a>
                        <a className={styles.headerLogoItem} href='#'>
                            <img src={logoOt} alt='logo'/>
                        </a>
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
                    <div className={styles.headerLanguage}>
                        <select>
                            <option>Українська</option>
                            <option>English</option>
                        </select>
                        <img src={flag} alt='arrow'/>
                    </div>
                    <a href='mailto:ot.vntu@gmail.com' className={styles.headerEmail}>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9592 7.82643L11.2842 9.49966C10.6049 10.1783 9.40977 10.1929 8.71582 9.49966L7.0407 7.82643L1.02445 13.8354C1.2484 13.9385 1.49531 14 1.75781 14H18.2422C18.5047 14 18.7515 13.9386 18.9754 13.8354L12.9592 7.82643Z" fill="#54A8DD"/>
                            <path d="M18.2422 0H1.75781C1.49531 0 1.2484 0.0615223 1.02453 0.164617L7.45332 6.58607C7.45375 6.58649 7.45426 6.58657 7.45469 6.587C7.45512 6.58743 7.4552 6.58801 7.4552 6.58801L9.54555 8.67596C9.76758 8.897 10.2325 8.897 10.4545 8.67596L12.5445 6.58836C12.5445 6.58836 12.545 6.58743 12.5454 6.587C12.5454 6.587 12.5463 6.58649 12.5468 6.58607L18.9754 0.164578C18.7515 0.0614445 18.5047 0 18.2422 0Z" fill="#54A8DD"/>
                            <path d="M0.186953 0.980467C0.0710937 1.21372 0 1.47264 0 1.75V12.25C0 12.5274 0.0710156 12.7863 0.186914 13.0195L6.21359 7.0002L0.186953 0.980467Z" fill="#54A8DD"/>
                            <path d="M19.813 0.980389L13.7864 7.0002L19.813 13.0196C19.9289 12.7864 20 12.5274 20 12.25V1.75C20 1.47257 19.9289 1.21364 19.813 0.980389Z" fill="#54A8DD"/>
                        </svg>
                        <span>ot.vntu@gmail.com</span>
                    </a>
                    <div className={styles.headerMenu}>
                        <div className={styles.textMenu}>Mеню Slavka</div>
                        <div className={styles.menuBtn}>
                            <div className={styles.burgerBtn}>
                                <span/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
