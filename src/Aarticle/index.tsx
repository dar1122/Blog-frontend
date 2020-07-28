import './index.css';
import React from 'react';
import { Row} from "antd";
import {Card} from "../CommonUI/Card";

export class Article extends React.Component{


    render() {
        return (
            <div style={{height:"100%"}}>
                <Row className={'article-title'}>
                    最新文章
                </Row>
                <Row className={'article-body'}>
                    <Card classname={'article_card'} style={{height:"380px",width:"400px"}} body={"1XX文章xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/img/2.jpg"}/>
                    <Card classname={'article_card'} style={{height:"380px",width:"400px"}} body={"1XX文章xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/img/2.jpg"}/>
                    <Card classname={'article_card'} style={{height:"380px",width:"400px"}} body={"1XX文章xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/img/2.jpg"}/>
                    <Card classname={'article_card'} style={{height:"380px",width:"400px"}} body={"1XX文章xxxxxxxxxxxx"} imgUrl={process.env.PUBLIC_URL+"/img/2.jpg"}/>
                </Row>
            </div>

        );
    }

}
