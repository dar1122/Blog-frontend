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
                                    <span>标题</span>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div>
                                    <a onClick={this.quit}>X</a>
                                </div>
                            </Col>
                        </Row>
                        <Row className={'model-body'}>
                            2
                        </Row>
                        <Row className={'model-foot'}>
                            3
                        </Row>
                </div>
            </>


        );

    }
}
