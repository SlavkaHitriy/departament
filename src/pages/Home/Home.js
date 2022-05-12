import React from 'react'

// Styles
import styles from './index.module.scss'

// Images


// Components
import HomeNew from './HomeNew'

const Home = () => {
    const news = [
        {id: 1, name: 'Новина 1', description: 'fslk;adfjalskdfj'},
        {id: 2, name: 'Новина 2', description: 'dffd'},
        {id: 3, name: 'Новина 3', description: 'sdfgsgdf'},
    ]

    return (
        <div className={styles.home}>
            {
                news.map(item => {
                    return <HomeNew key={item.id} data={item} />
                })
            }
        </div>
    )
}

export default Home
