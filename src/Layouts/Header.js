import React from "react"
import { Button, Menu, Input, Switch } from 'antd'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, BulbOutlined } from '@ant-design/icons';
import styles from "../Assets/Header.module.scss"
import styled from 'styled-components'

const Header = () => {

    const StyledInput = styled(Input.Group)`
    .ant-input-focused, .ant-input:focus {
        border-color: #40a9ff;
        border-right-width: 1px;
        outline: 0;
    }
    .ant-input-focused, .ant-input:focus {
        box-shadow: none;
    }
`;

    const StyledButton = styled(Input.Group)`
        .ant-btn {
            border-radius: 137px !important;
            line-height: 1.5715;
            position: relative;
            display: inline-block;
            font-weight: 400;
            white-space: nowrap;
            text-align: center;
            background-image: none;
            box-shadow: 0 2px 0 rgba(0,0,0,.015);
            cursor: pointer;
            transition: all .3s cubic-bezier(.645,.045,.355,1);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            touch-action: manipulation;
            height: 32px;
            padding: 4px 15px;
            font-size: 14px;
            border-radius: 2px;
            color: rgba(0,0,0,.85);
            border: none;
            background: #fff;
        }

        .ant-btn:focus, .ant-btn:hover {
        }
        .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-active, .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-open, .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected, .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item:hover, .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-active, .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-open, .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-selected, .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu:hover {
            color: #fff;
        }
`;
    return (
        <div className={styles.header}>
            <Menu className={styles.menu} mode="horizontal" defaultSelectedKeys={['home']} >
                <Menu.Item className={styles.brand}>
                    <span className={styles.brand_p1}>
                        Shopping
                    </span>
                    <span className={styles.brand_p2}>
                        Court
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
                    About
                </Menu.Item>
                <Menu.SubMenu id={styles.products} key="productMenu" title="Products" >
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
                <Menu.SubMenu id={styles.pages_menu} key="pagesMenu" title="Pages" >
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
                <Menu.Item className={styles.menu_left}>
                    <StyledInput>
                        <Input id={styles.menu_search_bar} placeholder="Search Here" />
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </StyledInput>
                </Menu.Item>
                <Menu.Item className={styles.menu_customize}  >
                    <Button className={styles.btn_menu} icon={<HomeOutlined />} size="large">
                        Login
                    </Button>
                </Menu.Item>
                <Menu.Item className={styles.menu_customize} >
                    <Button className={styles.btn_menu} icon={<ShoppingCartOutlined />} size="large" >
                        Cart
                    </Button>
                </Menu.Item>
                <Menu.Item className={styles.menu_customize} >
                    <BulbOutlined />
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Header;