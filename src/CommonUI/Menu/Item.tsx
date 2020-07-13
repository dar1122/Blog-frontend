import './Menu.css';
import React from 'react';

export class Item extends React.Component<any, any>{


    render() {
        return (
            <li className={'menu_item'}>{this.props.name}</li>
        );
    }
}
