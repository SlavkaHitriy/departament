import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Styles
import styles from './index.module.scss'

// Images
import HomeNewsFirstPicture from '../../assets/images/HomeNewsFirstPicture.png'
import Azarov from '../../assets/images/Azarov.jpg'

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
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/PagedNews?page=${page}&PageSize=${pageSize}`)
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
                        <Title className={styles.newsTitle} contents='Новини'/>
                    </div>
                    <div className={styles.homeNewsItems}>
                        <Link className={styles.homeNewsItem} to="/new/0">
                            <img
                                src={Azarov}
                                alt='Azarov'
                            />
                            <div className={styles.homeNewsItemContent}>
                                <h4 className={styles.homeNewsItemTitle}>
                                    УКАЗ ПРЕЗИДЕНТА УКРАЇНИ №658/2021
                                </h4>
                                <p className={styles.homeNewsItemText}>
                                    Відповідно до Указу Президента України від 10 вересня 2011 року № 906 "Про державні стипендії для видатних діячів науки, освіти, культури і мистецтва, охорони здоров'я, фізичної культури і спорту та інформаційної сфери"...
                                </p>
                            </div>
                        </Link>
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
