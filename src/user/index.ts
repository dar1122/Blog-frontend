export interface UserInfo {
    name: string
    avatar: string
    isLogin: boolean
}


export class User {

    isLogin: boolean;
    name: string;
    avatar: string;
    constructor() {
        this.isLogin = false;
        this.name = '';
        this.avatar = '';
    }



    private login = (user: UserInfo) =>{
        if (this.checkLogin(user)){
            this.name = user.name;
            this.avatar = user.name;
            this.isLogin = true;
        }

    };

    private checkLogin = (user: UserInfo):boolean =>{
        return true;
    };


}
