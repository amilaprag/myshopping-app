import React from "react"
import { Carousel } from 'antd'
import styled from 'styled-components'
import styles from '../Assets/Review.module.css'

const Review = () => {
    const StyledCarousel = styled(Carousel)`
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
            <StyledCarousel>
                <Carousel  >
                    <div className={styles.review_wrapper}>
                        <div className={styles.dialog_wrapper} >
                            <div className={styles.dialog_1} >
                                <div>
                                    <img className={styles.profile_imagex} src="https://www.nicepng.com/png/detail/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png" />
                                </div>
                                <div className={styles.review_text}>
                                    Capterra is a rating site that assesses software offered
                                    by B2C and B2B firms if you’re a SaaS company. Users can look for software by industry, business, or type. Capterra is one of the most trustworthy review sites for software businesses,
                                    so being active on this site can be one of the most
                                    important marketing activities for this kind of company.
                                </div>
                            </div>
                        </div>
                        <div className={styles.dialog_wrapper} >
                            <div className={styles.dialog_1} >
                                <div>
                                    <img className={styles.profile_imagex} src="https://www.nicepng.com/png/detail/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png" />
                                </div>
                                <div className={styles.review_text}>
                                    Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere.
                                    Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere.
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </StyledCarousel>
        </>
    )


}

export default Review;


