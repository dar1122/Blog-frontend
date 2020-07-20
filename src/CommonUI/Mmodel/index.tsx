import './index.css';
import React from 'react';
import { Row, Col } from "antd";
import {Shade} from "../Shade";
import {Props} from "../Shade";

export class Model extends React.Component<Props>{
    state = {
      show: this.props.show
    };

    componentWillReceiveProps(next: Props){

        this.setState({
            show: next.show
        });

    }

    quit = () =>{
        this.setState({
            show: false
        })
    };

    render() {
        return (
            <>
                <Shade show={this.state.show}/>

                <div className={'model'} style={{display: this.state.show?'block':'none'}}>
                        <Row className={'model-header'}>
                            <Col span={18}>
                                <div>
                                    <span>{this.props.title}</span>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div>
                                    <a onClick={this.quit} className={'close-model'}></a>
                                </div>
                            </Col>
                        </Row>
                        <Row className={'model-body'}>
                            {this.props.body}
                        </Row>
                        <Row className={'model-foot'}>
                            {this.props.foot}
                        </Row>
                </div>
            </>


        );

    }
}
