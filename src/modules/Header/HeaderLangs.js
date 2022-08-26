import React, { useState } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Components
import SvgSprite from '../SvgSprite/SvgSprite'

const HeaderLangs = () => {
    const langs = [
        {name: 'Українська', iconID: 'ukraine'},
        {name: 'English', iconID: 'england'},
    ]

    const [activeLangID, setActiveLangID] = useState(langs[0].iconID)
    const [openedDropdown, setOpenedDropdown] = useState(false)

    const changeLang = (id) => {
        setActiveLangID(id)
        setOpenedDropdown(false)
    }

    return (
        <div className={styles.headerLangs}>
            {
                <div className={styles.headerLangsItem} onClick={() => setOpenedDropdown(!openedDropdown)}>
                    <SvgSprite className={cn({
                        [styles.headerLangsArrow]: true,
                        [styles.headerLangsArrowActive]: openedDropdown,
                    })} spriteID={'arrow'}/>
                    {
                        langs.map((lang) => activeLangID === lang.iconID && (<React.Fragment key={lang.iconID}>
                            {lang.name}
                            <SvgSprite className={styles.headerLangsFlag} spriteID={lang.iconID}/>
                        </React.Fragment>))
                    }
                </div>
            }
            {
                openedDropdown && (
                    <div className={styles.headerLangsDropdown}>
                        {
                            langs.map(lang => activeLangID !== lang.iconID && (
                                <div className={styles.headerLangsItem} onClick={() => changeLang(lang.iconID)} key={lang.iconID}>
                                    {lang.name}
                                    <SvgSprite className={styles.headerLangsFlag} spriteID={lang.iconID}/>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default HeaderLangs
