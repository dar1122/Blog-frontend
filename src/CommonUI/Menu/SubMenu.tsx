import './Menu.css';
import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';

export class SubMenu extends React.Component<any, any>{

    render() {
        return (
            <li className={'submenu_title'}>
                <span>{this.props.name} <CaretRightOutlined/></span>
                <ul className={'submenu'}>
                    {this.props.children}
                </ul>
            </li>
        );
    }
}
