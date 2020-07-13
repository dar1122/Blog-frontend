import {VerticalAlignTopOutlined} from '@ant-design/icons';
import './BackTop.css';
import React from 'react';

interface State {
    show: boolean;
}

export class BackTop extends React.Component<any, State> {
    constructor(props:any) {
        super(props);
        this.state = { show: false }
    }

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    private handleScroll = () => {
        let scrollTop = window.scrollY;
        if (scrollTop > 500) {
            this.setState({show: true})
        } else {
            this.setState({show: false})
        }
    };

    private back = () => {
        let current_scrollY = window.scrollY;
        const x = setInterval(() => {
            window.scrollTo({top: current_scrollY});
            current_scrollY -= 70;
            if (current_scrollY < 0) {
                clearInterval(x);
            }
        }, 1);
    };

    render() {
        const style = {
            display: this.state.show ? 'block' : 'none'
        };
        return (
            <a onClick={this.back} className={'backtop'} style={style}>
                <div className={'backtop-icon'}>
                    <VerticalAlignTopOutlined/>
                </div>
            </a>
        );
    }
}
