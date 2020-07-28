import { Request } from "./Request";
import { RequestInfo } from "./Request";

const Host = 'http://10.10.51.249:4000';

export async function loginStatus() {
    const request: RequestInfo = {
        url: Host+'/user/loginStatus',
        other:{
            method: "GET",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            credentials: "include"
        }
    };
    const r = new Request(request);
    return await r.request();
}

export async function login(userId: string, password: string) {
    const request: RequestInfo = {
        url: Host+'/user/login?userId='+userId+'&password='+password,
        other:{
            method: "GET",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            credentials: "include"
        }
    };
    const r = new Request(request);
    return await r.request();
}

export async function logout() {
    const request: RequestInfo = {
        url: Host+'/user/logout',
        other:{
            method: "GET",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            credentials: "include"
        }
    };
    const r = new Request(request);
    return await r.request();
}

