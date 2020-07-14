import './Menu.css';
import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';

export class SubMenu extends React.Component<any, any>{

    render() {
        return (
            <li className={'submenu_title'}>
                <a><span style={{color: 'rgb(87, 87, 87)'}}>{this.props.name} <CaretRightOutlined/></span></a>
                <ul className={'submenu'}>
                    {this.props.children}
                </ul>
            </li>
        );
    }
}
