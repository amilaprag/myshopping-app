import React from "react"
import { Button, Input } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import styles from '../Assets/Subscribe.module.css'


const Subscribe = () => {

    return (
        <div className={styles.subscrbe_main_wrapper}>
            <div className={styles.subscrbe_wrapper}>
                <div className={styles.formOutlined} >
                    <FormOutlined id={styles.formOutlined} />
                </div>
                <div className={styles.subscrbe_text_wrapper}>
                    <div className={styles.subscrbe_text}>
                        <p className={styles.subscrbe_p1}> Get On The List</p>
                        <p className={styles.subscrbe_p2}> Shop Exclusive Promos & SAVE 20% on Your First Order</p>
                    </div>
                    <div className={styles.subscrbe_email}>
                        <Input className={styles.subscrbe_input} placeholder="Enter Your Email Here" />
                        <Button className={styles.subscrbe_button} type="danger">Subscribe</Button>
                    </div>
                    <p className={styles.subscrbe_p3}>
                        By entering your email, you are accepting our Terms of Use and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;