import { Button } from "antd"
import React from "react"
import { RightOutlined } from '@ant-design/icons'
import styles from '../Assets/NotificationPanel.module.scss'

const NotificationPanel = () => {
    return (
        <div className={styles.notification_panel}>
            <div className={styles.notification_panel_1}>
                <img id={styles.notification_panel_image_1}
                    src="https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg?w=996&t=st=1663672244~exp=1663672844~hmac=9ffd233c88f1fc8575d367f55d4e97ec7e7896378f2fc4689dfc3818f6b5bd2b" />
                <div className={styles.notification_panel_text}>
                    <p>Platform Velvet Sandals</p>
                    <Button className={styles.btn_shopping} type="danger" size="large">
                        Start Shopping
                        <RightOutlined />
                    </Button>
                </div>
            </div>
            <div className={styles.notification_panel_2}>
                <img id={styles.notification_panel_image_2}
                    src="https://img.freepik.com/free-photo/young-man-woman-unpleasantly-surprised-while-doing-online-shopping_496169-769.jpg?w=996&t=st=1663672245~exp=1663672845~hmac=e581108d3b476e6c9577a64e5241a13ffc38cfbfaa9e34a6711ffddb12556f9b" />
                <div className={styles.notification_panel_text}>
                    <p>Pebbled Weekend Bag</p>
                    <Button className={styles.btn_shopping} type="danger" size="large">
                        Start Shopping
                        <RightOutlined />
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default NotificationPanel;