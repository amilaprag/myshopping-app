import React from "react"
import { Button, Menu } from 'antd'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, BulbOutlined } from '@ant-design/icons';
import styles from "../Assets/Header.module.css"

const Header = () => {

    return (
        <Menu className={styles.header} mode="horizontal" defaultSelectedKeys={['home']} >
            <Menu.Item className={styles.brand}>
                <span className={styles.brand_p1}>
                    Shopping
                </span>
                <span className={styles.brand_p2}>
                    Cart
                </span>
            </Menu.Item>
            <Menu.Item id={styles.mobile_login_btn}  >
                <Button type="danger" icon={<HomeOutlined />} size="large">
                </Button>
            </Menu.Item>
            <Menu.Item id={styles.mobile_cart_btn} >
                <Button type="danger" icon={<ShoppingCartOutlined />} size="large" >
                </Button>
            </Menu.Item>
            <Menu.Item id={styles.mobile_theme_btn} >
                <Button type="primary" icon={<BulbOutlined />} size="large" />
            </Menu.Item>
            <Menu.Item id={styles.about} key="about">
                ABOUT
            </Menu.Item>
            <Menu.SubMenu id={styles.products} key="productMenu" title="PRODUCTS" >
                <Menu.Item key="two" >
                    Products
                </Menu.Item>
                <Menu.Item key="three" >
                    Products Single
                </Menu.Item>
                <Menu.Item key="four" >
                    Cart Page
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu id={styles.pages_menu} key="pagesMenu" title="PAGES" >
                <Menu.Item key="two" >
                    Blog Page
                </Menu.Item>
                <Menu.Item key="three" >
                    Blog Single
                </Menu.Item>
                <Menu.Item key="four" >
                    FAQ
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item id={styles.contact} key="contact" >
                Contact
            </Menu.Item>
            <Menu.Item id={styles.search_btn}>
                <Button shape="circle" icon={<SearchOutlined />} />
            </Menu.Item>
            <Menu.Item id={styles.login_btn}  >
                <Button type="danger" icon={<HomeOutlined />} size="large">
                    Login
                </Button>
            </Menu.Item>
            <Menu.Item id={styles.cart_btn} >
                <Button type="danger" icon={<ShoppingCartOutlined />} size="large" >
                    Cart
                </Button>
            </Menu.Item>
            <Menu.Item id={styles.theme_btn} >
                <Button type="primary" icon={<BulbOutlined />} size="large" ></Button>
            </Menu.Item>
        </Menu>
    )
}

export default Header;