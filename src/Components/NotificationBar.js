import React from "react"
import styles from '../Assets/Notificationbar.module.css'
import { PushpinFilled } from '@ant-design/icons';


const NotificationBar = () => {

    return (
        <>
            <div className={styles.notificationbar_main}>
                Free Shipping For You Till Midnight
                <span style={{ marginLeft: '10px' }}>
                    <PushpinFilled />
                </span>
            </div>
        </>
    )
}
export default NotificationBar;