export interface RequestInfo {
    url: string
    other: {
        method: "GET"|"POST"|"PUT"
        body?: any
        credentials?: "include"|"same-origin"|"omit"
        headers: any
    }

}

export class Request {

    private requestInfo: RequestInfo;

    constructor(req: RequestInfo) {
        this.requestInfo = req
    }

    async request() {
        try {
            const res = await fetch(this.requestInfo.url,this.requestInfo.other);
            if(res.status === 200){
                return await res.json();
            }

        } catch (e) {
            console.error("Error:",e)
        }

    }
}
