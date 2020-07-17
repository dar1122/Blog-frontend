import React from 'react';

export interface Props {
    show: boolean

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


