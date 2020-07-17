import './index.css';
import React from 'react';
import { Row, Col, Space } from "antd";
import { MailFilled, WechatOutlined, GithubFilled, SearchOutlined } from '@ant-design/icons';
import { Menu } from "../CommonUI/Menu";
import { Search } from "../CommonUI/Search";
import { Avatar } from "../CommonUI/Avatar";

export class Topbar extends React.Component {

    render() {
        const visiter = 'stranger';
        return (
            <Row className={'welcome'} >
                <Col span={2} >
                    <Menu>
                        <Menu.SubMenu name={'分类1'}>
                            <Menu.Item name={'子菜单1'}/>
                            <Menu.Item name={'子菜单2'} />
                            <Menu.Item name={'子菜单3'} />
                        </Menu.SubMenu>
                        <Menu.SubMenu name={'分类2'}>
                            <Menu.Item name={'子菜单4'}/>
                            <Menu.Item name={'子菜单5'} />
                            <Menu.Item name={'子菜单6'} />
                        </Menu.SubMenu>
                        <Menu.SubMenu name={'分类3'}>
                            <Menu.Item name={'子菜单7'}/>
                            <Menu.Item name={'子菜单8'} />
                            <Menu.Item name={'子菜单9'} />
                        </Menu.SubMenu>
                        <Menu.SubMenu name={'分类4'}>
                            <Menu.Item name={'子菜单4'}/>
                            <Menu.Item name={'子菜单5'} />
                            <Menu.Item name={'子菜单6'} />
                        </Menu.SubMenu>
                    </Menu>
                </Col>
                <Col span={6} offset={1}>
                    <p>Hello {visiter}, Welcome to my Blog !</p>
                </Col>

                <Col span={3} offset={9} >
                    <Search />
                </Col>
                <Col span={1} offset={0} style={{textAlign:'center'}}>
                    <Space >
                        <a href={'https://www.baidu.com/'} className={'link'}>
                            <WechatOutlined  />
                        </a>
                        <a href={'https://github.com/dar1122/Blog-frontend'} className={'link'}>
                            <GithubFilled />
                        </a>
                        <a href={'https://www.baidu.com/'} className={'link'}>
                            <MailFilled />
                        </a>
                    </Space>
                </Col>

                <Col span={2}>
                    <Avatar />
                </Col>

            </Row>
        );
    }

}
