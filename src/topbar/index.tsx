import './index.css';
import React from 'react';
import { Row, Col, Space } from "antd";
import { MailFilled, WechatOutlined, GithubFilled } from '@ant-design/icons';


export class Topbar extends React.Component<any, any>{

    render() {
        return (
            <Row className={'welcome'} >
                <Col span={3} >
                    <button>菜单</button>
                </Col>
                <Col span={6} >
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
