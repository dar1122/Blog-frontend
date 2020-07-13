import './index.css';
import React from 'react';
import { Row, Col, Space } from "antd";
import { MailFilled, WechatOutlined, GithubFilled } from '@ant-design/icons';
import { Menu } from "../CommonUI/Menu";


export class Topbar extends React.Component {

    render() {
        return (
            <Row className={'welcome'} >
                <Col span={2} >
                    <Menu>
                        <Menu.SubMenu>
                            <Menu.Item name={'子菜单1'}/>
                            <Menu.Item name={'子菜单2'} />
                            <Menu.Item name={'子菜单3'} />
                        </Menu.SubMenu>
                        <Menu.SubMenu>
                            <Menu.Item name={'子菜单4'}/>
                            <Menu.Item name={'子菜单5'} />
                            <Menu.Item name={'子菜单6'} />
                        </Menu.SubMenu>
                    </Menu>
                </Col>
                <Col span={6} offset={1} >
                    <p>Hello stranger, Welcome to my Blog !</p>
                </Col>
                <Col span={3} offset={11}>
                    <Space >
                        <a href={'https://www.baidu.com/'} className={'link'}>
                            <WechatOutlined  />
                        </a>
                        <a href={'https://github.com/dar1122'} className={'link'}>
                            <GithubFilled />
                        </a>
                        <a href={'https://www.baidu.com/'} className={'link'}>
                            <MailFilled />
                        </a>
                    </Space>

                </Col>
            </Row>
        );
    }

}
