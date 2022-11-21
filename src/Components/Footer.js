import React from "react"
import { Visa, Mastercard, Cirrus, Ebay, Western, Pagseguro, Skrill, Applepay, Amazon, SamsungPay } from "react-pay-icons"
import styles from '../Assets/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

    return (
        <>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_head_content}>
                    Special Offer All Branded Sandals Are
                    Flat 50% Discount
                </div>
                <div className={styles.footer_body_content}>
                    <div className={styles.footer_links}>
                        <p className={styles.footer_p1}>
                            Useful Links
                        </p>
                        <p className={styles.footer_p2}>
                            Home
                        </p>
                        <p className={styles.footer_p2}>
                            About
                        </p>
                        <p className={styles.footer_p2}>
                            Blogs
                        </p>
                        <p className={styles.footer_p2}>
                            Contact
                        </p>
                        <p className={styles.footer_p2}>
                            Support
                        </p>
                        <p className={styles.footer_p2}>
                            News & Media
                        </p>
                        <p className={styles.footer_p2}>
                            Careers
                        </p>
                    </div>
                    <div className={styles.footer_information}>
                        <p className={styles.footer_p1}>
                            Information
                        </p>
                        <p className={styles.footer_p2}>
                            Partners
                        </p>
                        <p className={styles.footer_p2}>
                            Clients
                        </p>
                        <p className={styles.footer_p2}>
                            Blogs
                        </p>
                        <p className={styles.footer_p2}>
                            Our Projects
                        </p>
                        <p className={styles.footer_p2}>
                            Recomendations
                        </p>
                        <p className={styles.footer_p2}>
                            News & Media
                        </p>
                        <p className={styles.footer_p2}>
                            Awards
                        </p>
                    </div>
                    <div className={styles.footer_body_address}>
                        <p className={styles.footer_p1}>
                            Address
                        </p>
                        <p className={styles.footer_p3}>
                            London, UK
                        </p>
                        <p className={styles.footer_p3}>
                            998 13h Street, Office 436
                        </p>
                        <p className={styles.footer_p3}>
                            Harlo 61466
                        </p>
                        <p className={styles.footer_p3}>
                            +(21) 255 999 8888
                        </p>
                        <p className={styles.footer_p3}>
                            ShoppyKart@mail.com
                        </p>
                    </div>
                    <div className={styles.footer_body_payement_method}>
                        <p className={styles.footer_p1}>
                            Payment Method
                        </p>
                        <div className={styles.footer_body_payement_icons}>
                            <div>
                                <Visa style={{ margin: 10, width: 100 }} />
                                <Mastercard style={{ margin: 10, width: 100 }} />
                                <Western style={{ margin: 10, width: 100 }} />
                                <Skrill style={{ margin: 10, width: 100 }} />
                            </div>
                            <div>
                                <Amazon style={{ margin: 10, width: 100 }} />
                                <Ebay style={{ margin: 10, width: 100 }} />
                                <Pagseguro style={{ margin: 10, width: 100 }} />
                            </div>
                            <div>
                                <Cirrus style={{ margin: 10, width: 100 }} />
                                <SamsungPay style={{ margin: 10, width: 100 }} />
                                <Applepay style={{ margin: 10, width: 100 }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_details}>
                    <p class={styles.footer_p4}>
                        <FontAwesomeIcon icon={faPhone} />
                    </p>
                    <p class={styles.footer_p4}>
                        (000) 999 _656 _888
                    </p>
                    <p class={styles.footer_p4}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </p>
                    <p class={styles.footer_p4}>
                        shoppingcourt@gmail.com
                    </p>
                    <p class={styles.footer_p5}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </p>
                    <p class={styles.footer_p6}>|</p>
                    <p class={styles.footer_p6}> <FontAwesomeIcon icon={faTwitter} /> </p>
                    <p class={styles.footer_p6}>|</p>
                    <p class={styles.footer_p6}> <FontAwesomeIcon icon={faInstagram} /> </p>
                    <p class={styles.footer_p6}>|</p>
                    <p class={styles.footer_p6}> <FontAwesomeIcon icon={faYoutube} /> </p>
                </div>
            </div>
        </>
    )
}

export default Footer;