import React from "react"
import styles from "../Assets/MainContent.module.css"
import Carousel from "../Components/Carousel"
import Deals from "../Components/Deals";
import NotificationBar from "../Components/NotificationBar"
import NotificationPanel from "../Components/NotificationPanel";
import Review from "../Components/Review";
import VideoPanel from "../Components/VideoPanel";
import Header from "./Header";

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
                    <Deals />
                </div>
                <div className={styles.main_discounts}>
                    <Deals />
                </div>
                <div className={styles.main_offers}>
                    <Deals />
                </div>
                <div className={styles.main_video}>
                    <VideoPanel />
                </div>
                {/* <div className={styles.main_shop}>
                    ddd
                </div> */}
                <div className={styles.main_reviewes}>
                    <Review />
                </div>
                <div className={styles.main_contact}>
                    ddd
                </div>
                <div className={styles.main_footer}>
                    ddd
                </div>
            </div>
        </>
    );
}

export default MainLayout;