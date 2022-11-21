import React from "react"
import { Carousel } from 'antd'
import styled from 'styled-components'
import styles from '../Assets/Review.module.css'
import { StarTwoTone } from '@ant-design/icons'

const Review = () => {
    const starCount = 8;
    const StyledCarousel = styled(Carousel)`
    .ant-carousel {
        margin: auto !important;
        width: 90% !important;
        padding: 10px;
    }
    .ant-carousel .slick-dots li {
        margin-bottom :10px;
        margin-left :10px;
    }
    .ant-carousel .slick-dots li button {
        display: block; 
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: transparent;
        font-size: 0;
        background:  brown;
        outline: none;
        cursor: pointer;
        opacity: 0.3;
        transition: all 0.5s;
    }
    
    .ant-carousel .slick-dots li.slick-active button {
        background: #2aa53a ;
        opacity: 1;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
`;

    return (
        <>
            <p className={styles.review_static_text_p1} > What Clients Say </p>
            <StyledCarousel>
                <Carousel autoplay  >
                    <div className={styles.review_wrapper}>
                        <div className={styles.text_wrapper}>
                            <div className={styles.profile_image_wrapper} >
                                <div className={styles.review_image}>
                                    <img className={styles.profile_image} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                    <div className={styles.profile_image_text}>
                                        <p className={styles.review_text_p}>Sundar Pichai
                                            Tamil Nadu, India,
                                            Indian-born American
                                            executive who was CEO of
                                            both Google, Inc. (2015),
                                            and its holding company, Alphabet Inc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.review_text}>
                                <p className={styles.review_text_p}>
                                    "
                                    Capterra is a rating site that assesses software offered by B2C and B2B firms if you’re a SaaS company. Users can look for software by industry, business, or type. Capterra is one of the most trustworthy review sites for software businesses,
                                    so being active on this site can be one of the most
                                    important marketing activities for this kind of company.
                                    "
                                    <span>
                                        <p><StarTwoTone />
                                            <StarTwoTone />
                                            <StarTwoTone />
                                            <StarTwoTone />
                                            <StarTwoTone /></p>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.review_wrapper}>
                        <div className={styles.text_wrapper}>
                            <div className={styles.profile_image_wrapper} >
                                <div className={styles.review_image}>
                                    <img className={styles.profile_image} src="https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/lacheev210900016.jpg?ver=6" />
                                    <div className={styles.profile_image_text}>
                                        <p className={styles.review_text_p}>Geem Saab
                                            Tamil Nadu, India,
                                            pakistan-born American
                                            executive who was CEO of
                                            both Tesla, Inc. (2022),
                                            and its holding company, Alphabet Inc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.review_text}>
                                <p className={styles.review_text_p}>
                                    "
                                    Capterra is a rating site that assesses software offered by B2C and B2B firms if you’re a SaaS company. Users can look for software by industry, business, or type. Capterra is one of the most trustworthy review sites for software businesses,
                                    so being active on this site can be one of the most
                                    important marketing activities for this kind of company.
                                    "
                                    <span>
                                        <p><StarTwoTone />
                                            <StarTwoTone />
                                            <StarTwoTone />
                                            <StarTwoTone />
                                            <StarTwoTone /></p>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </StyledCarousel>
        </>
    )


}

export default Review;


