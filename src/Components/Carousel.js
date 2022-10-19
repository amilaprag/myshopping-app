import React from 'react'
import { Button, Carousel } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import styles from '../Assets/Carousel.module.css'


const CarouselItem = () => (
    <Carousel autoplay class={styles.main_carousel}>
        <div class={styles.container}>
            <img src="https://img.freepik.com/free-photo/young-beautiful-blonde-woman-jacket-blue-wall-with-mobile-phone-doing-online-shopping_496169-1447.jpg?w=996&t=st=1663601352~exp=1663601952~hmac=9fe70a46614def938637e194a32b2ad301730e00614a1fe4ce9a44b73b48b563"
                class={styles.carousel_image}
            />
            <div class={styles.top_left}>
                <p1>Up To 60% Off Now</p1>
                <div class={styles.text_middle_left}>
                    <p>Mid Season Sale 40%</p>
                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                </div>
                <Button type="danger" size="large">
                    Start Shopping
                    <RightOutlined />
                </Button>
            </div>
        </div>
        <div class={styles.container}>
            <img src="https://img.freepik.com/free-photo/young-woman-yellow-leather-jacket-copy-space_23-2148674153.jpg?w=1060&t=st=1663587418~exp=1663588018~hmac=4b3304e209df0324e4b40303859c4cc70c6b9cdeee69b2dac6e4e085f765afb4"
                class={styles.carousel_image}
            />
            <div class={styles.top_right}>
                <p1>Up To 60% Off Now</p1>
                <div class={styles.text_middle}>
                    <p>Mid Season Sale 40%</p>
                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                </div>
                <Button type="danger" size="large">
                    Start Shopping
                    <RightOutlined />
                </Button>
            </div>
        </div>
        <div class={styles.container}>
            <img src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733313.jpg?w=1380&t=st=1663587494~exp=1663588094~hmac=b44977efd7848ac1de1bdae16898c4fa3369f429b65b3160e314ed8c679d450d"
                class={styles.carousel_image}
            />
            <div class={styles.top_right}>
                <p1>Up To 60% Off Now</p1>
                <div class={styles.text_middle}>
                    <p>Mid Season Sale 40%</p>
                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                </div>
                <Button type="danger" size="large">
                    Start Shopping
                    <RightOutlined />
                </Button>
            </div>
        </div>
        <div class={styles.container}>
            <img src="https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?w=1380&t=st=1663587192~exp=1663587792~hmac=8667a213f9a68baac5f68d0a85448cbbde194ddedd5e3b02c705e8291b5d7010"
                class={styles.carousel_image}
            />
            <div class={styles.top_right}>
                <p1>Up To 60% Off Now</p1>
                <div class={styles.text_middle}>
                    <p>Mid Season Sale 40%</p>
                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                </div>
                <Button type="danger" size="large">
                    Start Shopping
                    <RightOutlined />
                </Button>
            </div>
        </div>
    </Carousel>
);

export default CarouselItem;