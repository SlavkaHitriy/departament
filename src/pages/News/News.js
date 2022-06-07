import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Styles
import styles from './index.module.scss'

// Images
import HomeNewsFirstPicture from '../../assets/images/HomeNewsFirstPicture.png'

// Components
import Title from '../../modules/Title/Title'
import Pagination from '../../modules/Pagination/Pagination'


const News = () => {
    const pageSize = 12
    const {page} = useParams()

    const [news, setNews] = useState([])
    const [paginationInfo, setPaginationInfo] = useState()
    const [loadingData, setLoadingData] = useState(true)

    const getNews = async () => {
        const response = await fetch(`http://localhost:5000/PagedNews?page=${page}&PageSize=${pageSize}`)
        const news = await response.json()
        setLoadingData(false)

        setPaginationInfo({
            pageNumber: news.pageNumber,
            totalPages: news.totalPages,
            hasPreviousPage: news.hasPreviousPage,
            hasNextPage: news.hasNextPage,
        })
        setNews(news.itemsAtPage)
    }

    useEffect(() => {
        getNews()
    }, [page])

    return (
        <div className={styles.news}>
            <div className={styles.newsContent}>
                <div className={styles.container}>
                    <div className={styles.newsTitleWrapper}>
                        <Title className={styles.newsTitle} contents='Новини'></Title>
                    </div>
                    <div className={styles.homeNewsItems}>
                        {
                            news.length > 0 && news.map(newItem => (
                                <div className={styles.homeNewsItem} key={newItem.id}>
                                    <img
                                        src={newItem.imageStorageUrl ? newItem.imageStorageUrl : HomeNewsFirstPicture}
                                        alt='HomeNewsFirstPicture'
                                    />
                                    <div className={styles.homeNewsItemContent}>
                                        <h4 className={styles.homeNewsItemTitle}>
                                            {newItem.title}
                                        </h4>
                                        <p className={styles.homeNewsItemText}>
                                            {
                                                newItem.description.length > 400
                                                    ? newItem.description.slice(0, 400) + '...'
                                                    : newItem.description
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Pagination info={paginationInfo} />
                </div>
            </div>
        </div>
    )
}

export default News
