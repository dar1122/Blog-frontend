import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import {User} from "./user";
import {loginStatus} from "./API";

export const user = new User();
loginStatus().then(data => {
    if(data){
        if(data.isLoginOk){
            user.isLogin = true;
            user.name = data.message.username;
            user.avatar = data.message.avatar;
        }
    }
}).then(()=>{
    ReactDOM.render(

        <React.StrictMode>

            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
