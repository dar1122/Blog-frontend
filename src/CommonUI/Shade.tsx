import React from 'react';

export interface Props {
    show: boolean
    title?: string
    body?: any
    foot?: any
}

export class Shade extends React.Component<Props>{

    state = {
        show: this.props.show
    };

    componentWillReceiveProps(next: Props){
        this.setState({
            show: next.show
        })
    }

    render() {
        return(
            <div className={'shade'} style={{display: this.state.show?'block':'none'}}/>
        )
    }
}


