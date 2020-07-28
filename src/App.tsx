import React from 'react';
import './App.css';
import {Row, Col} from 'antd';
import {Topbar} from "./topbar";
import {BackTop} from "./CommonUI/BackTop/BackTop";
import {Titleimg} from "./showimg/titleimg";
import {ToolBar} from "./toolbar";
import {Article} from "./Aarticle";

export class App extends React.Component{



    render() {

        return(
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
                <Row>
                    <Col span={18} offset={3} className={'roll'}>
                        <ToolBar/>
                    </Col>
                </Row>

                <Row>
                    <Col span={14} offset={3} className={'article'}>
                        <Article/>
                    </Col>
                    <Col span={4}  className={'right-bar'}>3</Col>
                </Row>
                <div className={'space'}/>
                <Row>
                    <Col span={24} className={'bottom-bar'}>底部栏</Col>
                </Row>
                <BackTop/>
            </div>
        );
    }

}







