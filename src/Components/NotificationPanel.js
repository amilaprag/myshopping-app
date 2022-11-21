import { Button } from "antd"
import React from "react"
import styles from '../Assets/NotificationPanel.module.scss'
import { CaretRightOutlined } from '@ant-design/icons'


const NotificationPanel = () => {
    return (
        <div className={styles.notification_panel}>
            <div className={styles.notification_panel_1}>
                <img id={styles.notification_panel_image_1}
                    src="https://img.freepik.com/premium-photo/girlfriends-going-shopping-concept_53876-86016.jpg?w=1380" />
                <div className={styles.notification_panel_text}>
                    <p>Platform Velvet Sandals</p>
                    <Button className={styles.notification_panel_btn_shopping} type="danger" size="large">
                        Start Shopping
                        <CaretRightOutlined />
                    </Button>
                </div>
            </div>
            <div className={styles.notification_panel_2}>
                <img id={styles.notification_panel_image_2}
                    src="https://img.freepik.com/free-photo/people-professional-cute-job-busy-student_1303-2773.jpg?w=1060&t=st=1668891770~exp=1668892370~hmac=a68aef129e572ddb84abf4e6b6249ed24b1f87083d99743da0f0e73634634fec" />
                <div className={styles.notification_panel_text}>
                    <p>Pebbled Weekend Bag</p>
                    <Button className={styles.notification_panel_btn_shopping} type="danger" size="large">
                        Start Shopping
                        <CaretRightOutlined />
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default NotificationPanel;