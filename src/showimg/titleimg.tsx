import React from 'react';
import '../App.css';

interface Style {
    transform?: string;
    transition?: string;
    position?: "absolute";
}

interface State {
    img_url_1: string;
    img_url_2: string;
    img_url_3: string;
    style_1: Style;
    style_2: Style;
    style_3: Style;
}

export class Titleimg extends React.Component<any, State>{

    private images: string[]= ['1.jpg','2.jpg','3.jpg','blake.jpg'];
    private i : number =0;


    state: State = {
        img_url_1: process.env.PUBLIC_URL +'/img/'+ this.images[0],
        img_url_2: process.env.PUBLIC_URL +'/img/'+ this.images[1],
        img_url_3: process.env.PUBLIC_URL +'/img/'+ this.images[2],
        style_1 : {transform: 'translateX(100%)', transition: 'transform  3s',position: "absolute"},
        style_2 : {transform: 'translateX(0%)', transition: 'transform  3s',position: "absolute"},
        style_3 : {transform: 'translateX(-100%)', transition: 'transform  0s',position: "absolute"},
    };


    componentDidMount(): void {
        setInterval(this.changeImg,6000)
    }

    private changeImg = (i: number = this.i) : void => {
        const transitions = ['transform  3s','transform  3s','transform  0s'];
        const translates = ['translateX(0%)','translateX(-100%)','translateX(100%)'];
        const tr_index_1 = i%3;
        const tr_index_2 = (i+1)%3;
        const tr_index_3 = (i+2)%3;
        this.i++;
        this.setState({
            style_1 : {transform: translates[tr_index_1], transition: transitions[tr_index_1],position: "absolute"},
            style_2 : {transform: translates[tr_index_2], transition: transitions[tr_index_2],position: "absolute"},
            style_3 : {transform: translates[tr_index_3], transition: transitions[tr_index_3],position: "absolute"},
        })
    };

    render() {
        return (
            <>
                <div className={'mine'}>——　　　D A R ' S　　　B L O G　　　——</div>
                <img src={this.state.img_url_1} width={'100%'}  height={'100%'} style={this.state.style_1} />
                <img src={this.state.img_url_2} width={'100%'}  height={'100%'} style={this.state.style_2} />
                <img src={this.state.img_url_3} width={'100%'}  height={'100%'} style={this.state.style_3} />
            </>
        );
    }
}
