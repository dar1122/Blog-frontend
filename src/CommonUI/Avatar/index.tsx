import './index.css';
import React from 'react';
import { Model } from "../Mmodel";
import { Row, Col } from "antd";
import {user} from "../../index";
import MD5 from 'crypto-js/md5';
import {login, logout} from "../../API";


export class Avatar extends React.Component{



    state = {
        isShow: false,
        isLogin: user.isLogin,
        type: "password",
        icon_url: "view_off.png",
        userId: '',
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


    private logout = () =>{
        logout().then(
            data => {
                if(data){
                    user.logout();
                }else {
                    alert('退出失败')
                }
            }
        );
        window.location.reload();
    };

    private loginIn = () =>{
        this.checkLoginIn()
            .then(data => {
                if (data.isLoginOk){
                    user.name = data.message.username;
                    user.avatar = data.message.avatar;
                    user.isLogin = true;
                }
                else {
                    alert("登陆失败")
                }
            })
        window.location.reload()
    };

    private setUserInfo(event:any, key:string) {
        this.setState({
            [key]: event.currentTarget.value
        });

    }

    private async checkLoginIn(){
        return await login(this.state.userId, MD5(this.state.password).toString());
    };


    render() {
        //登录弹框
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
                        <div><input onInput={(event) => {this.setUserInfo(event,'userId')} } className={'login-user'} placeholder={'输入手机号 / 邮箱'}/></div>
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
                <div className={'avatar'} >
                    <a className={'avatar_a'} >
                        <img className={'avatar_img'} src={process.env.PUBLIC_URL+'/img/blake.jpg'}/>
                        <span className={'avatar_info'}>{user.name}</span>
                    </a>
                    <embed src={process.env.PUBLIC_URL+'/icon/arrow-down.svg'} style={{width:"10px"}} />
                    <div className={'userMenu'}>
                        <Row style={{
                            height: "30%"
                        }}/>
                        <Row style={{
                            height: "60%"
                        }}/>
                        <Row style={{
                            height: "10%"
                        }}>
                            <Col span={8} className={'user_setting'}>
                                <a style={{
                                    color: "black"
                                }}>账号设置</a>
                            </Col>
                            <Col span={8} offset={8} className={'logout'}>
                                <a style={{
                                    color: "red"
                                }} onClick={this.logout} >退出</a>
                            </Col>
                        </Row>
                    </div>
                </div>
                :
                <div className={'login'}>
                    <a onClick={this.loginClick}>登录</a>/<a>注册</a>
                    <Model show={this.state.isShow} body={body} foot={foot} />
                </div>


        );
    }
}
