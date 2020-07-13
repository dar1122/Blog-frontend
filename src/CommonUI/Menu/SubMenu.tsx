import './Menu.css';
import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';

export class SubMenu extends React.Component<any, any>{

    render() {
        return (
            <li className={'submenu_title'}>
                <span>分类</span>
                <ul className={'submenu'}>{this.props.children}</ul>
            </li>

        );
    }

}
