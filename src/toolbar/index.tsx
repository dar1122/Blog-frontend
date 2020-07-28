import './index.css';
import React from 'react';
import {Col, Row} from "antd";
import {Card} from "../CommonUI/Card";


export class ToolBar extends React.Component{


    render() {
        return (
            <div className={'roll'}>
                <div className={'roll_title'}>
                    推荐工具
                </div>
                <Row className={'roll_body'}>
                    <Col span={1} className={'roll_left'} >
                        <embed className={'roll_left_icon'} src={process.env.PUBLIC_URL+'/icon/arrow-left-bold.svg'} style={{width:"100%",height:"100%"}} />
                    </Col>
                    <Col span={20} offset={1} className={'roll_img'}>
                        <Card classname={'roll_card'} style={{height:"280px",width:"270px"}} body={"1XX工具xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/toolimg/3.jpg"}/>
                        <Card classname={'roll_card'} style={{height:"280px",width:"270px"}} body={"2XX工具xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/toolimg/3.jpg"}/>
                        <Card classname={'roll_card'} style={{height:"280px",width:"270px"}} body={"3XX工具xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/toolimg/3.jpg"}/>
                        <Card classname={'roll_card'} style={{height:"280px",width:"270px"}} body={"4XX工具xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/toolimg/3.jpg"}/>
                        <Card classname={'roll_card'} style={{height:"280px",width:"270px"}} body={"5XX工具xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/toolimg/3.jpg"}/>
                        <Card classname={'roll_card'} style={{height:"280px",width:"270px"}} body={"6XX工具xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/toolimg/3.jpg"}/>
                    </Col>
                    <Col span={1} offset={1} className={'roll_right'}>
                        <embed className={'roll_right_icon'} src={process.env.PUBLIC_URL+'/icon/arrow-right-bold.svg'} style={{width:"100%",height:"100%"}} />
                    </Col>
                </Row>
            </div>

        );
    }

}
