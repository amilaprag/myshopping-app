import React from "react"
import styles from '../Assets/Deals.module.scss'

const Deals = (data) => {

    const { posts } = data;
    return (
        <>
            <div className={styles.deal_panel}>
                <div className={styles.deal_wrapper}>
                    <div className={styles.deal_panel_header}>
                        <p id={styles.deal_panel_header_text}>{posts != null ? posts[0].title : null}</p>
                    </div>
                    <div className={styles.deal}>
                        {
                            posts != null ? posts.map((item) =>
                                <div>
                                    <div className={styles.deal_panel_image_wrapper}>
                                        <div className={styles.deal_panel_image}>
                                            <img className={styles.deal_panel_image_img} src={item.content} />
                                        </div>
                                    </div>
                                    <div className={styles.deal_panel_text}>
                                        <p>{item.contentText}</p>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deals;