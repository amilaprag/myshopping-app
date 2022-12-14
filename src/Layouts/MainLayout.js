import React from "react"
import styles from "../Assets/MainContent.module.css"
import Carousel from "../Components/Carousel"
import Deals from "../Components/Deals"
import Footer from "../Components/Footer"
import NotificationBar from "../Components/NotificationBar"
import NotificationPanel from "../Components/NotificationPanel"
import Review from "../Components/Review"
import Subscribe from "../Components/Subscribe"
import VideoPanel from "../Components/VideoPanel"
import Header from "./Header"
import { SAMPLE_POSTS, SAMPLE_POSTS_DISCOUNTS, SAMPLE_POSTS_OFFERS, SAMPLE_POSTS_SHOPWITHUS } from '../Utils/TestSamples/Post'

const MainLayout = () => {

    return (
        <>
            <div className={styles.main_content}>
                <div className={styles.main_header}>
                    <Header />
                </div>
                <div className={styles.main_carousel}>
                    <Carousel />
                </div>
                <div className={styles.main_notification_bar}>
                    <NotificationBar />
                </div>
                <div className={styles.main_notification_panel}>
                    <NotificationPanel />
                </div>
                <br />
                <div className={styles.main_deals}>
                    <Deals posts={SAMPLE_POSTS} />
                </div>
                <div className={styles.main_discounts}>
                    <Deals posts={SAMPLE_POSTS_DISCOUNTS} />
                </div>
                <div className={styles.main_offers}>
                    <Deals posts={SAMPLE_POSTS_OFFERS} />
                </div>
                <div className={styles.main_video}>
                    <VideoPanel />
                </div>
                <div className={styles.main_shop}>
                    <Deals posts={SAMPLE_POSTS_SHOPWITHUS} />
                </div>
                <div className={styles.main_reviewes}>
                    <Review />
                </div>
                <div className={styles.main_contact}>
                    <Subscribe />
                </div>
                <div className={styles.main_footer}>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default MainLayout;