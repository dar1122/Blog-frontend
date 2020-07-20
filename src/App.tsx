import React from 'react';
import './App.css';
import {Row, Col} from 'antd';
import {Topbar} from "./topbar";
import {BackTop} from "./CommonUI/BackTop/BackTop";
import {Titleimg} from "./showimg/titleimg";
import {User} from "./user";


export const user = new User();

const App = () => {
    return (
        <div className={'back'}>
            <Row>
                <Col span={24} className={'top-bar'}>
                    <Topbar/>
                </Col>
            </Row>

            <Row>
                <Col span={24} className={'big-title'}>
                    <Titleimg/>
                </Col>
            </Row>
            <div className={'space'}/>
            <Row>
                <Col span={18} offset={3} className={'roll'}>滚动展示</Col>
            </Row>
            <div className={'space'}/>
            <Row>
                <Col span={4} offset={3} className={'article'}>
                    <div className={'article-img'}/>
                    <div className={'space'}/>
                    <div className={'article-img'}/>
                </Col>
                <Col span={4} offset={1} className={'article'}>
                    <div className={'article-img'}/>
                    <div className={'space'}/>
                    <div className={'article-img'}/>
                </Col>
                <Col span={4} offset={1} className={'article'}>
                    <div className={'article-img'}/>
                    <div className={'space'}/>
                    <div className={'article-img'}/>
                </Col>
                <Col span={3} offset={1} className={'right-bar'}>3</Col>
            </Row>
            <div className={'space'}/>
            <Row>
                <Col span={24} className={'bottom-bar'}>底部栏</Col>
            </Row>
            <BackTop/>
        </div>
    );
};

export default App;
