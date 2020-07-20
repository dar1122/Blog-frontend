import './index.css';
import React from 'react';
import { Model } from "../Mmodel";
import { Row, Col } from "antd";
import {user} from "../../App";

export class Avatar extends React.Component{



    state = {
        isShow: false,
        isLogin: user.isLogin,
        type: "password",
        icon_url: "view_off.png",
        username: '',
        password: ''
    };


    loginClick = () =>{
        this.setState({
            isShow: true
        })
    };

    private changeIcon = () => {
        if (this.state.type === "password") {
            this.setState({
                type: "text",
                icon_url: "view.png"
            })
        }
        else {
            this.setState({
                type: "password",
                icon_url: "view_off.png"
            })
        }
    };

    private loginIn = () =>{
        if (this.checkLoginIn()){
            user.isLogin = true;
            user.name = this.state.username;
            user.avatar = '';
            this.setState({
                isLogin: user.isLogin
            })
        }
        else {
            alert('登陆失败')
        }

    };

    private setUserInfo(event:any, key:string) {
        this.setState({
            [key]: event.currentTarget.value
        });

    }

    private checkLoginIn = () =>{
        return this.state.username === 'dar' && this.state.password === '111';
    };


    render() {

        const body =
            <div style={{
                width: "100%"
            }}>
                <Row style={{
                    width: "100%",
                    height: "20%",
                    fontSize: "25px",
                    color: "grey"
                }}>
                    <Col span={6} offset={6}>
                        <a className={'login-body-a'}>登录</a>
                    </Col>
                    <Col span={6}>
                        <a className={'login-body-a'}>注册</a>
                    </Col>
                </Row>
                <Row style={{
                    width: "100%",
                    height: "80%"
                }}>
                    <form noValidate={false} style={{
                        width: "100%",
                        height: "60%"
                    }}>
                        <div><input onInput={(event) => {this.setUserInfo(event,'username')} } className={'login-user'} placeholder={'输入手机号 / 邮箱'}/></div>
                        <div><input onInput={(event) => {this.setUserInfo(event,'password')} } type={this.state.type} className={'login-password'} placeholder={'输入密码'}/><span onClick={this.changeIcon} className={'password-hide'} style={{
                            content: 'url('+process.env.PUBLIC_URL+'/icon/'+this.state.icon_url+')'
                        }} /></div>
                    </form>
                    <div style={{
                        width: '100%',
                        height: "40%"
                    }}>
                        <a className={'login-btn'} onClick={this.loginIn}>登录</a>
                        <div className={'login-tool'}>
                            <div className={'remberme'}>
                                <input type={'checkbox'}/>  <span>记住我</span>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>;

        const foot =
            <Row style={{
                width: "100%",
            }}>
                <Col span={4} offset={8}>
                    <a className={'wechat'}/>
                </Col>
                <Col span={4}>
                    <a className={'QQ'}/>
                </Col>
            </Row>;

        return (
            user.isLogin?
                <div className={'avatar'} ><img src={user.avatar}/><span>{user.name}</span></div>:
                <div className={'login'}>
                    <a onClick={this.loginClick}>登录</a>/<a>注册</a>
                    <Model show={this.state.isShow} body={body} foot={foot} />
                </div>



        );
    }
}
