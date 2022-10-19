import React from "react"
import styles from '../Assets/Deals.module.scss'

const Deals = () => {

    return (
        <>
            <div className={styles.deal_panel}>
                <div className={styles.deal_panel_header}>
                    <p>Best Discounts For You</p>
                </div>
                <div className={styles.dealwrapper}>
                    <div className={styles.deal}>
                        <div>
                            <div className={styles.deal_panel_image_wrapper}>
                                <div className={styles.deal_panel_image}>
                                    <img className={styles.deal_panel_image_img} src="https://demo.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d1.jpg" />
                                </div>
                            </div>
                            <div className={styles.deal_panel_text}>
                                <p>Min. 40% Off on Formal Wear</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.deal_panel_image_wrapper}>
                                <div className={styles.deal_panel_image}>
                                    <img className={styles.deal_panel_image_img} src="https://demo.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d2.jpg" />
                                </div>
                            </div>
                            <div className={styles.deal_panel_text}>
                                <p>Min. 60% Off on Active Wear</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.deal_panel_image_wrapper}>
                                <div className={styles.deal_panel_image}>
                                    <img className={styles.deal_panel_image_img} src="https://demo.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d3.jpg" />
                                </div>
                            </div>
                            <div className={styles.deal_panel_text}>
                                <p>Min. 40% Off on Shoes</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.deal_panel_image_wrapper}>
                                <div className={styles.deal_panel_image}>
                                    <img className={styles.deal_panel_image_img} src="https://demo.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d4.jpg" />
                                </div>
                            </div>
                            <div className={styles.deal_panel_text}>
                                <p>Min. 50% Off on Shirts</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.deal_panel_image_wrapper}>
                                <div className={styles.deal_panel_image}>
                                    <img className={styles.deal_panel_image_img} src="https://demo.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d5.jpg" />
                                </div>
                            </div>
                            <div className={styles.deal_panel_text}>
                                <p>Min. 50% Off on Clothing</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.deal_panel_image_wrapper}>
                                <div className={styles.deal_panel_image}>
                                    <img className={styles.deal_panel_image_img} src="https://demo.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d6.jpg" />
                                </div>
                            </div>
                            <div className={styles.deal_panel_text}>
                                <p>Min. 60% Off on Sandles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deals;