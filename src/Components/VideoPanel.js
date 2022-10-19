import React from "react";
import styles from '../Assets/VideoPanel.module.scss'


const VideoPanel = () => {

    return (
        <>
            <div className={styles.video_panel_wrapper}>
                <div className={styles.video_panel_header}>
                    Pre-Fall Collection,That Mid-Summer Craving For Fall Styles?
                </div>
                <div className={styles.video_panel_Background}>
                    <div>
                        <iframe className={styles.video} src="https://player.vimeo.com/video/145014989" frameborder="0" allow="autoplay; fullscreen;picture-in-picture:" allowfullscreen />
                    </div>
                    <div>
                        <iframe className={styles.video} src="https://player.vimeo.com/video/301524940?h=4e21a11750" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPanel;