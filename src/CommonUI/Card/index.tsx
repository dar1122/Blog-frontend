import './index.css';
import React from 'react';
import { Row} from "antd";

interface CardInfo {
    style: {
        width: string
        height: string
    }
    imgUrl: string
    body: string
    classname: string
}


export class Card extends React.Component<CardInfo>{

    private readonly info: CardInfo;

    constructor(info: CardInfo) {
        super(info);
        this.info = {
            style: {
                width: info.style.width,
                height: info.style.height,
            },
            imgUrl: info.imgUrl,
            body: info.body,
            classname: info.classname
        }
    }


    render() {
        return (
            <div style={this.info.style} className={this.info.classname}>
                <Row style={{width:"100%",height:"70%"}} className={'card_img'}>
                    <img src={this.info.imgUrl} width={'100%'}  height={'100%'}/>
                </Row>
                <Row style={{width:"100%",height:"30%"}} className={'card_body'}>
                    {this.info.body}
                </Row>
            </div>
        );
    }
}
