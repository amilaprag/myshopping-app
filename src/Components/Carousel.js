import React from 'react'
import { Button, Carousel } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import styles from '../Assets/Carousel.module.css'
import Image_Carsoul_06 from "../Images/Carousel/image_06.jpg"
import Image_Carsoul_01 from "../Images/Carousel/image_01.jpg"
import Image_Carsoul_02 from "../Images/Carousel/image_02.jpg"
import Image_Carsoul_03 from "../Images/Carousel/image_03.jpg"


const CarouselItem = () => (
    <Carousel autoplay class={styles.main_carousel}>
        <div class={styles.container}>
            <img src={Image_Carsoul_06}
                class={styles.carousel_image}
            />
            <div class={styles.top_left}>
                <p1>Up To 60% Off Now</p1>
                <div class={styles.text_middle_left}>
                    <p>Mid Season Sale 40%</p>
                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                </div>
                <Button className={styles.carousel_btn} type="danger" size="large">
                    Start Shopping
                    <CaretRightOutlined />
                </Button>
            </div>
        </div>
        <div class={styles.container}>
            <img src={Image_Carsoul_01}
                class={styles.carousel_image}
            />
            <div class={styles.top_right}>
                <p1>Up To 60% Off Now</p1>
                <div class={styles.text_middle}>
                    <p>Mid Season Sale 40%</p>
                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                </div>
                <Button className={styles.carousel_btn} type="danger" size="large">
                    Start Shopping
                    <CaretRightOutlined />
                </Button>
            </div>
        </div>
        <div class={styles.container}>
            <img src={Image_Carsoul_02}
                class={styles.carousel_image}
            />
            <div class={styles.top_right}>
                <p1>Up To 60% Off Now</p1>
                <div class={styles.text_middle}>
                    <p>Mid Season Sale 40%</p>
                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                </div>
                <Button className={styles.carousel_btn} type="danger" size="large">
                    Start Shopping
                    <CaretRightOutlined />
                </Button>
            </div>
        </div>
        <div class={styles.container}>
            <img src={Image_Carsoul_03}
                class={styles.carousel_image}
            />
            <div class={styles.top_right}>
                <p1>Up To 60% Off Now</p1>
                <div class={styles.text_middle}>
                    <p>Mid Season Sale 40%</p>
                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                </div>
                <Button className={styles.carousel_btn} type="danger" size="large">
                    Start Shopping
                    <CaretRightOutlined />
                </Button>
            </div>
        </div>
    </Carousel>
);

export default CarouselItem;