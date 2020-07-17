import './index.css';
import React from 'react';
import { UserInfo } from "../../user";
import { Model } from "../Mmodel";

export class Avatar extends React.Component{

    private userName: string;

    private userAvatar: string;

    private isLogin: boolean;


    constructor(user: UserInfo) {
        super(user);
        this.userName = user.name;
        this.userAvatar = user.avatar;
        this.isLogin = user.isLogin;

    }

    state = {
      isShow: false
    };
    loginClick = () =>{
        this.setState({
            isShow: true
        })
    };


    render() {
        return (
            this.isLogin?
                <div className={'avatar'} ><img src={this.userAvatar}/><i></i></div>:
                <div className={'login'}>
                    <a onClick={this.loginClick}>登录</a>/<a>注册</a>
                    <Model show={this.state.isShow} />
                </div>



        );
    }
}
